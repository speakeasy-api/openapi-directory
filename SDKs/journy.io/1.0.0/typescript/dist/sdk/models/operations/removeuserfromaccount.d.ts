import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Account identification requires an accountId, domain or both
 */
export declare class RemoveUserFromAccountRequestBodyAccount extends SpeakeasyBase {
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
export declare class RemoveUserFromAccountRequestBodyUsersIdentification extends SpeakeasyBase {
    /**
     * Email address of the user
     */
    email?: string;
    /**
     * Unique identifier for the user in your database
     */
    userId?: string;
}
export declare class RemoveUserFromAccountRequestBodyUsers extends SpeakeasyBase {
    /**
     * User identification requires a userId, email or both
     */
    identification: RemoveUserFromAccountRequestBodyUsersIdentification;
}
/**
 * The identification for user and account
 */
export declare class RemoveUserFromAccountRequestBody extends SpeakeasyBase {
    /**
     * Account identification requires an accountId, domain or both
     */
    account: RemoveUserFromAccountRequestBodyAccount;
    users: RemoveUserFromAccountRequestBodyUsers[];
}
export declare class RemoveUserFromAccount500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class RemoveUserFromAccount500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount500ApplicationJSONMeta;
}
export declare class RemoveUserFromAccount429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class RemoveUserFromAccount429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount429ApplicationJSONMeta;
}
export declare class RemoveUserFromAccount401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class RemoveUserFromAccount401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class RemoveUserFromAccount400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class RemoveUserFromAccount400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: RemoveUserFromAccount400ApplicationJSONErrorsParameters;
}
export declare class RemoveUserFromAccount400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class RemoveUserFromAccount400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: RemoveUserFromAccount400ApplicationJSONErrors;
    message: string;
    meta: RemoveUserFromAccount400ApplicationJSONMeta;
}
export declare class RemoveUserFromAccount204ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class RemoveUserFromAccount204ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount204ApplicationJSONMeta;
}
export declare class RemoveUserFromAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No content
     */
    removeUserFromAccount204ApplicationJSONObject?: RemoveUserFromAccount204ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    removeUserFromAccount400ApplicationJSONObject?: RemoveUserFromAccount400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    removeUserFromAccount401ApplicationJSONObject?: RemoveUserFromAccount401ApplicationJSON;
    /**
     * Too many API requests were send
     */
    removeUserFromAccount429ApplicationJSONObject?: RemoveUserFromAccount429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    removeUserFromAccount500ApplicationJSONObject?: RemoveUserFromAccount500ApplicationJSON;
}
