import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUsersIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class DeleteUsersId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class DeleteUsersId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class DeleteUsersId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    deleteUsersId401ApplicationJSONObject?: DeleteUsersId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    deleteUsersId403ApplicationJSONObject?: DeleteUsersId403ApplicationJSON;
    /**
     * Not found
     */
    deleteUsersId404ApplicationJSONObject?: DeleteUsersId404ApplicationJSON;
}
