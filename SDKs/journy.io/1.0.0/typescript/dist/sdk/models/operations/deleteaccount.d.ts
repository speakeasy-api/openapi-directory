import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Account identification requires an accountId, domain or both
 */
export declare class DeleteAccountRequestBodyIdentification extends SpeakeasyBase {
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
 * Delete an account
 */
export declare class DeleteAccountRequestBody extends SpeakeasyBase {
    /**
     * Account identification requires an accountId, domain or both
     */
    identification: DeleteAccountRequestBodyIdentification;
}
export declare class DeleteAccount500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteAccount500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteAccount500ApplicationJSONMeta;
}
export declare class DeleteAccount429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteAccount429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteAccount429ApplicationJSONMeta;
}
export declare class DeleteAccount403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteAccount403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteAccount403ApplicationJSONMeta;
}
export declare class DeleteAccount401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteAccount401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteAccount401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class DeleteAccount400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class DeleteAccount400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: DeleteAccount400ApplicationJSONErrorsParameters;
}
export declare class DeleteAccount400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteAccount400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: DeleteAccount400ApplicationJSONErrors;
    message: string;
    meta: DeleteAccount400ApplicationJSONMeta;
}
export declare class DeleteAccount202ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class DeleteAccount202ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: DeleteAccount202ApplicationJSONMeta;
}
export declare class DeleteAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    deleteAccount202ApplicationJSONObject?: DeleteAccount202ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    deleteAccount400ApplicationJSONObject?: DeleteAccount400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    deleteAccount401ApplicationJSONObject?: DeleteAccount401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    deleteAccount403ApplicationJSONObject?: DeleteAccount403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    deleteAccount429ApplicationJSONObject?: DeleteAccount429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    deleteAccount500ApplicationJSONObject?: DeleteAccount500ApplicationJSON;
}
