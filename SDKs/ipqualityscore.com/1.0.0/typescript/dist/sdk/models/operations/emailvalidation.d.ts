import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EmailValidationRequest extends SpeakeasyBase {
    /**
     * (Required) USER_EMAIL_HERE
     */
    userEmailHere: string;
    /**
     * (Required) YOUR_API_KEY_HERE
     */
    yourApiKeyHere: string;
}
/**
 * Unexpected error
 */
export declare class EmailValidation500ApplicationJSON extends SpeakeasyBase {
    message?: string;
    requestId?: string;
    success?: boolean;
}
/**
 * Bad Request
 */
export declare class EmailValidation400ApplicationJSON extends SpeakeasyBase {
    message?: string;
    requestId?: string;
    success?: boolean;
}
export declare class EmailValidation200ApplicationJSONAssociatedNames extends SpeakeasyBase {
    names?: string[];
    status?: string;
}
export declare class EmailValidation200ApplicationJSONAssociatedPhoneNumbers extends SpeakeasyBase {
    phoneNumbers?: string[];
    status?: string;
}
export declare class EmailValidation200ApplicationJSONDomainAge extends SpeakeasyBase {
    human?: string;
    iso?: string;
    timestamp?: number;
}
export declare class EmailValidation200ApplicationJSONFirstSeen extends SpeakeasyBase {
    human?: string;
    iso?: string;
    timestamp?: number;
}
/**
 * Successful response
 */
export declare class EmailValidation200ApplicationJSON extends SpeakeasyBase {
    associatedNames?: EmailValidation200ApplicationJSONAssociatedNames;
    associatedPhoneNumbers?: EmailValidation200ApplicationJSONAssociatedPhoneNumbers;
    catchAll?: boolean;
    common?: boolean;
    deliverability?: string;
    disposable?: boolean;
    dnsValid?: boolean;
    domainAge?: EmailValidation200ApplicationJSONDomainAge;
    domainVelocity?: string;
    firstName?: string;
    firstSeen?: EmailValidation200ApplicationJSONFirstSeen;
    fraudScore?: number;
    frequentComplainer?: boolean;
    generic?: boolean;
    honeypot?: boolean;
    leaked?: boolean;
    message?: string;
    overallScore?: number;
    recentAbuse?: boolean;
    requestId?: string;
    sanitizedEmail?: string;
    smtpScore?: number;
    spamTrapScore?: string;
    success?: boolean;
    suggestedDomain?: string;
    suspect?: boolean;
    timedOut?: boolean;
    userActivity?: string;
    valid?: boolean;
}
export declare class EmailValidationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    emailValidation200ApplicationJSONObject?: EmailValidation200ApplicationJSON;
    /**
     * Bad Request
     */
    emailValidation400ApplicationJSONObject?: EmailValidation400ApplicationJSON;
    /**
     * Unexpected error
     */
    emailValidation500ApplicationJSONObject?: EmailValidation500ApplicationJSON;
}
