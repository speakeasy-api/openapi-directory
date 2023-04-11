import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PhoneValidationRequest extends SpeakeasyBase {
    /**
     * (Required) USER_PHONE_HERE
     */
    userPhoneHere: string;
    /**
     * (Required) YOUR_API_KEY_HERE
     */
    yourApiKeyHere: string;
    /**
     * country
     */
    country?: string;
}
/**
 * Unexpected error
 */
export declare class PhoneValidation500ApplicationJSON extends SpeakeasyBase {
    message?: string;
    requestId?: string;
    success?: boolean;
}
/**
 * Bad Request
 */
export declare class PhoneValidation400ApplicationJSON extends SpeakeasyBase {
    message?: string;
    requestId?: string;
    success?: boolean;
}
export declare class PhoneValidation200ApplicationJSONAssociatedEmailAddresses extends SpeakeasyBase {
    emails?: string[];
    status?: string;
}
/**
 * Successful response
 */
export declare class PhoneValidation200ApplicationJSON extends SpeakeasyBase {
    voip?: boolean;
    active?: boolean;
    activeStatus?: string;
    associatedEmailAddresses?: PhoneValidation200ApplicationJSONAssociatedEmailAddresses;
    carrier?: string;
    city?: string;
    country?: string;
    dialingCode?: number;
    doNotCall?: boolean;
    formatted?: string;
    fraudScore?: number;
    leaked?: boolean;
    lineType?: string;
    localFormat?: string;
    mcc?: string;
    message?: string;
    mnc?: string;
    name?: string;
    prepaid?: string;
    recentAbuse?: boolean;
    region?: string;
    requestId?: string;
    risky?: boolean;
    smsDomain?: string;
    smsEmail?: string;
    spammer?: boolean;
    success?: boolean;
    timezone?: string;
    userActivity?: string;
    valid?: boolean;
    zipCode?: string;
}
export declare class PhoneValidationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    phoneValidation200ApplicationJSONObject?: PhoneValidation200ApplicationJSON;
    /**
     * Bad Request
     */
    phoneValidation400ApplicationJSONObject?: PhoneValidation400ApplicationJSON;
    /**
     * Unexpected error
     */
    phoneValidation500ApplicationJSONObject?: PhoneValidation500ApplicationJSON;
}
