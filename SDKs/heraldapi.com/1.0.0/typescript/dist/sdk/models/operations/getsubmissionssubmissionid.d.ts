import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubmissionsSubmissionIdRequest extends SpeakeasyBase {
    /**
     * `id` for a specific submission
     */
    submissionId: string;
}
/**
 * OK
 */
export declare class GetSubmissionsSubmissionId200ApplicationJSON extends SpeakeasyBase {
    /**
     * A submission is a set of information submitted by a producer to institutions in order to get quotes.
     */
    submission?: shared.SubmissionV1;
}
export declare class GetSubmissionsSubmissionIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getSubmissionsSubmissionId200ApplicationJSONObject?: GetSubmissionsSubmissionId200ApplicationJSON;
}
