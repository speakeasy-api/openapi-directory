import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFrameworksIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class GetFrameworksId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetFrameworksId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetFrameworksIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Framework object
     */
    framework?: shared.Framework;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getFrameworksId401ApplicationJSONObject?: GetFrameworksId401ApplicationJSON;
    /**
     * Not found
     */
    getFrameworksId404ApplicationJSONObject?: GetFrameworksId404ApplicationJSON;
}
