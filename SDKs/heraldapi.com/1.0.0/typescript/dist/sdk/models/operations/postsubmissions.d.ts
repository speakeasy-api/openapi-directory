import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSubmissionsRequestBody extends SpeakeasyBase {
    application: any;
    producerId: string;
}
/**
 * Bad Request: something was wrong with the submission
 */
export declare class PostSubmissions400ApplicationJSON extends SpeakeasyBase {
    errors?: shared.ErrorV1[];
}
/**
 * OK
 */
export declare class PostSubmissions200ApplicationJSON extends SpeakeasyBase {
    /**
     * A submission is a set of information submitted by a producer to institutions in order to get quotes.
     */
    submission?: shared.SubmissionV1;
}
export declare class PostSubmissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postSubmissions200ApplicationJSONObject?: PostSubmissions200ApplicationJSON;
    /**
     * Bad Request: something was wrong with the submission
     */
    postSubmissions400ApplicationJSONObject?: PostSubmissions400ApplicationJSON;
}
