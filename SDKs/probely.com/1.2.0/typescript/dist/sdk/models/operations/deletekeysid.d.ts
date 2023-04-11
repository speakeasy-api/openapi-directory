import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteKeysIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not allowed to perform operation
 */
export declare class DeleteKeysId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class DeleteKeysId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    deleteKeysId401ApplicationJSONObject?: DeleteKeysId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    deleteKeysId403ApplicationJSONObject?: DeleteKeysId403ApplicationJSON;
}
