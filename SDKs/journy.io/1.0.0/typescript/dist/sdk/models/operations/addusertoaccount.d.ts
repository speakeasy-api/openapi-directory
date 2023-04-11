import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Account identification requires an accountId, domain or both
 */
export declare class AddUserToAccountRequestBodyAccount extends SpeakeasyBase {
    /**
     * Unique identifier for the account in your database
     */
    accountId?: string;
    /**
     * The domain associated with the account (e.g. acme-inc.com)
     */
    domain?: string;
}
/**
 * User identification requires a userId, email or both
 */
export declare class AddUserToAccountRequestBodyUsersIdentification extends SpeakeasyBase {
    /**
     * Email address of the user
     */
    email?: string;
    /**
     * Unique identifier for the user in your database
     */
    userId?: string;
}
export declare class AddUserToAccountRequestBodyUsers extends SpeakeasyBase {
    /**
     * User identification requires a userId, email or both
     */
    identification: AddUserToAccountRequestBodyUsersIdentification;
}
/**
 * The identification for user and account
 */
export declare class AddUserToAccountRequestBody extends SpeakeasyBase {
    /**
     * Account identification requires an accountId, domain or both
     */
    account: AddUserToAccountRequestBodyAccount;
    users: AddUserToAccountRequestBodyUsers[];
}
export declare class AddUserToAccount500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class AddUserToAccount500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: AddUserToAccount500ApplicationJSONMeta;
}
export declare class AddUserToAccount429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class AddUserToAccount429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: AddUserToAccount429ApplicationJSONMeta;
}
export declare class AddUserToAccount401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class AddUserToAccount401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: AddUserToAccount401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class AddUserToAccount400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class AddUserToAccount400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: AddUserToAccount400ApplicationJSONErrorsParameters;
}
export declare class AddUserToAccount400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class AddUserToAccount400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: AddUserToAccount400ApplicationJSONErrors;
    message: string;
    meta: AddUserToAccount400ApplicationJSONMeta;
}
export declare class AddUserToAccount201ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class AddUserToAccount201ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: AddUserToAccount201ApplicationJSONMeta;
}
export declare class AddUserToAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object was created
     */
    addUserToAccount201ApplicationJSONObject?: AddUserToAccount201ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    addUserToAccount400ApplicationJSONObject?: AddUserToAccount400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    addUserToAccount401ApplicationJSONObject?: AddUserToAccount401ApplicationJSON;
    /**
     * Too many API requests were send
     */
    addUserToAccount429ApplicationJSONObject?: AddUserToAccount429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    addUserToAccount500ApplicationJSONObject?: AddUserToAccount500ApplicationJSON;
}
