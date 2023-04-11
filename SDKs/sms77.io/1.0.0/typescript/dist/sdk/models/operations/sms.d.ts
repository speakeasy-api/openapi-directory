import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Disable message sending.
 */
export declare enum SmsDebugEnum {
    One = "1",
    Zero = "0"
}
/**
 * Attach message details to response.
 */
export declare enum SmsDetailsEnum {
    One = "1",
    Zero = "0"
}
/**
 * Send as flash.
 */
export declare enum SmsFlashEnum {
    One = "1",
    Zero = "0"
}
/**
 * Return a detailed JSON response.
 */
export declare enum SmsJSONEnum {
    One = "1",
    Zero = "0"
}
/**
 * Enable sending of duplicated messages within 180 seconds.
 */
export declare enum SmsNoReloadEnum {
    One = "1",
    Zero = "0"
}
/**
 * Enable performance tracking for found URLs.
 */
export declare enum SmsPerformanceTrackingEnum {
    One = "1",
    Zero = "0"
}
/**
 * Attach message ID to second row in a text response.
 */
export declare enum SmsReturnMsgIDEnum {
    One = "1",
    Zero = "0"
}
/**
 * Force unicode encoding. Reduces sms length to 70 chars.
 */
export declare enum SmsUnicodeEnum {
    One = "1",
    Zero = "0"
}
/**
 * Force UTF8 encoding.
 */
export declare enum SmsUtf8Enum {
    One = "1",
    Zero = "0"
}
export declare class SmsRequest extends SpeakeasyBase {
    /**
     * Disable message sending.
     */
    debug?: SmsDebugEnum;
    /**
     * Date/Time for delayed dispatch.
     */
    delay?: string;
    /**
     * Attach message details to response.
     */
    details?: SmsDetailsEnum;
    /**
     * Send as flash.
     */
    flash?: SmsFlashEnum;
    /**
     * Identifier to return in callbacks.
     */
    foreignId?: string;
    /**
     * Set a custom sender name.
     */
    from?: string;
    /**
     * Return a detailed JSON response.
     */
    json?: SmsJSONEnum;
    /**
     * A custom label.
     */
    label?: string;
    /**
     * Enable sending of duplicated messages within 180 seconds.
     */
    noReload?: SmsNoReloadEnum;
    /**
     * Enable performance tracking for found URLs.
     */
    performanceTracking?: SmsPerformanceTrackingEnum;
    /**
     * Attach message ID to second row in a text response.
     */
    returnMsgId?: SmsReturnMsgIDEnum;
    /**
     * The actual text message to send.
     */
    text: string;
    /**
     * The recipient number or group name.
     */
    to: string;
    /**
     * A custom User Data Header.
     */
    udh?: string;
    /**
     * Force unicode encoding. Reduces sms length to 70 chars.
     */
    unicode?: SmsUnicodeEnum;
    /**
     * Force UTF8 encoding.
     */
    utf8?: SmsUtf8Enum;
}
export declare class Sms200ApplicationJSONMessages extends SpeakeasyBase {
    encoding?: string;
    error?: string;
    errorText?: string;
    id?: string;
    messages?: string[];
    parts?: number;
    price?: number;
    recipient?: string;
    sender?: string;
    success?: boolean;
    text?: string;
}
export declare enum Sms200ApplicationJSONSmsTypeEnum {
    Economy = "economy",
    Direct = "direct"
}
/**
 * OK
 */
export declare class Sms200ApplicationJSON extends SpeakeasyBase {
    balance?: number;
    debug?: string;
    messages?: Sms200ApplicationJSONMessages[];
    smsType?: Sms200ApplicationJSONSmsTypeEnum;
    success?: string;
    totalPrice?: number;
}
export declare class SmsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sms200ApplicationJSONObject?: Sms200ApplicationJSON;
    /**
     * OK
     */
    sms200TextPlainObject?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
