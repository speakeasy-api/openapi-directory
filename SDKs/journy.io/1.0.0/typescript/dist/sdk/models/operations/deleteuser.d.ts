import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User identification requires a userId, email or both
 */
export declare class DeleteUserRequestBodyIdentification extends SpeakeasyBase {
    /**
     * Email address of the user
     */
    email?: string;
    /**
     * Unique identifier for the user in your database
     */
    userId?: string;
}
/**
 * Delete a user
 */
export declare class DeleteUserRequestBody extends SpeakeasyBase {
    /**
     * User identification requires a userId, email or both
     */
    identification: DeleteUserRequestBodyIdentification;
}
export declare class DeleteUser500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteUser500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteUser500ApplicationJSONMeta;
}
export declare class DeleteUser429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteUser429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteUser429ApplicationJSONMeta;
}
export declare class DeleteUser403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteUser403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteUser403ApplicationJSONMeta;
}
export declare class DeleteUser401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteUser401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteUser401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class DeleteUser400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class DeleteUser400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: DeleteUser400ApplicationJSONErrorsParameters;
}
export declare class DeleteUser400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteUser400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: DeleteUser400ApplicationJSONErrors;
    message: string;
    meta: DeleteUser400ApplicationJSONMeta;
}
export declare class DeleteUser202ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteUser202ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteUser202ApplicationJSONMeta;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    deleteUser202ApplicationJSONObject?: DeleteUser202ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    deleteUser400ApplicationJSONObject?: DeleteUser400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    deleteUser401ApplicationJSONObject?: DeleteUser401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    deleteUser403ApplicationJSONObject?: DeleteUser403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    deleteUser429ApplicationJSONObject?: DeleteUser429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    deleteUser500ApplicationJSONObject?: DeleteUser500ApplicationJSON;
}
