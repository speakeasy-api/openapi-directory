import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class PostApplications200ApplicationJSON extends SpeakeasyBase {
    /**
     * An application is a set of information submitted by a producer to institutions in order to get quotes.
     */
    application?: shared.ApplicationReadV1;
}
export declare class PostApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postApplications200ApplicationJSONObject?: PostApplications200ApplicationJSON;
}
