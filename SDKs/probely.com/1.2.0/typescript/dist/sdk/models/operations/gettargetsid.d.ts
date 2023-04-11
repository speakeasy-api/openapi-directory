import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Internal server error
 */
export declare class GetTargetsId500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Not found
 */
export declare class GetTargetsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Target object
     */
    target?: shared.Target;
    /**
     * Access token is missing or invalid
     */
    getTargetsId401ApplicationJSONObject?: GetTargetsId401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsId404ApplicationJSONObject?: GetTargetsId404ApplicationJSON;
    /**
     * Internal server error
     */
    getTargetsId500ApplicationJSONObject?: GetTargetsId500ApplicationJSON;
}
