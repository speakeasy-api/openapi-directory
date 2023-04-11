import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKeysIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetKeysId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetKeysId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetKeysIdResponse extends SpeakeasyBase {
    /**
     * API Key object
     */
    apiKey?: shared.APIKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getKeysId401ApplicationJSONObject?: GetKeysId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getKeysId403ApplicationJSONObject?: GetKeysId403ApplicationJSON;
}
