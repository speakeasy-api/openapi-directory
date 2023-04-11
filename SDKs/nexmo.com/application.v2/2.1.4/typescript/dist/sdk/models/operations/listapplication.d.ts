import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListApplicationRequest extends SpeakeasyBase {
    /**
     * The current page number (starts at 1)
     */
    page?: number;
    /**
     * The number of applications per page
     */
    pageSize?: number;
}
/**
 * Invalid Accept Header
 */
export declare class ListApplication406ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Invalid Request Method
 */
export declare class ListApplication405ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Credential is missing or invalid
 */
export declare class ListApplication401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
export declare class ListApplication400ApplicationJSONInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Invalid Request
 */
export declare class ListApplication400ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    invalidParameters?: ListApplication400ApplicationJSONInvalidParameters[];
    title?: string;
    type?: string;
}
export declare class ListApplicationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    applicationResponseCollection?: shared.ApplicationResponseCollection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    listApplication400ApplicationJSONObject?: ListApplication400ApplicationJSON;
    /**
     * Credential is missing or invalid
     */
    listApplication401ApplicationJSONObject?: ListApplication401ApplicationJSON;
    /**
     * Invalid Request Method
     */
    listApplication405ApplicationJSONObject?: ListApplication405ApplicationJSON;
    /**
     * Invalid Accept Header
     */
    listApplication406ApplicationJSONObject?: ListApplication406ApplicationJSON;
}
