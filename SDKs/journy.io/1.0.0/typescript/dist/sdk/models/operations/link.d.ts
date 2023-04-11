import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User identification requires a userId, email or both
 */
export declare class LinkRequestBodyIdentification extends SpeakeasyBase {
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
 * Link web activity to user
 */
export declare class LinkRequestBody extends SpeakeasyBase {
    deviceId: string;
    /**
     * User identification requires a userId, email or both
     */
    identification: LinkRequestBodyIdentification;
}
export declare class Link500ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class Link500ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: Link500ApplicationJSONMeta;
}
export declare class Link429ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class Link429ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: Link429ApplicationJSONMeta;
}
export declare class Link403ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class Link403ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: Link403ApplicationJSONMeta;
}
export declare class Link401ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class Link401ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: Link401ApplicationJSONMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export declare class Link400ApplicationJSONErrorsParameters extends SpeakeasyBase {
    header?: Record<string, string>;
    path?: Record<string, string>;
    query?: Record<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
 */
export declare class Link400ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * All input fields that seemed incorrect
     */
    fields?: Record<string, string>;
    /**
     * All query-, header- and path- parameters that seemed incorrect
     */
    parameters?: Link400ApplicationJSONErrorsParameters;
}
export declare class Link400ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class Link400ApplicationJSON extends SpeakeasyBase {
    /**
     * Map that sums up all received values that seemed incorrect
     */
    errors: Link400ApplicationJSONErrors;
    message: string;
    meta: Link400ApplicationJSONMeta;
}
export declare class Link201ApplicationJSONMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
/**
 * The message specifies what is done
 */
export declare class Link201ApplicationJSON extends SpeakeasyBase {
    message: string;
    meta: Link201ApplicationJSONMeta;
}
export declare class LinkResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object was created
     */
    link201ApplicationJSONObject?: Link201ApplicationJSON;
    /**
     * Bad request, some fields or parameters are incorrect
     */
    link400ApplicationJSONObject?: Link400ApplicationJSON;
    /**
     * No API Key was provided or the key is not authorised to perform the action
     */
    link401ApplicationJSONObject?: Link401ApplicationJSON;
    /**
     * The API Key provided is currently not enabled
     */
    link403ApplicationJSONObject?: Link403ApplicationJSON;
    /**
     * Too many API requests were send
     */
    link429ApplicationJSONObject?: Link429ApplicationJSON;
    /**
     * An unexpected error occurred
     */
    link500ApplicationJSONObject?: Link500ApplicationJSON;
}
