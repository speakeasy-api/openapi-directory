import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MaliciousUrlScannerRequest extends SpeakeasyBase {
    /**
     * (Required) URL_HERE
     */
    urlHere: string;
    /**
     * (Required) YOUR_API_KEY_HERE
     */
    yourApiKeyHere: string;
}
/**
 * Unexpected error
 */
export declare class MaliciousUrlScanner500ApplicationJSON extends SpeakeasyBase {
    message?: string;
    requestId?: string;
    success?: boolean;
}
/**
 * Bad Request
 */
export declare class MaliciousUrlScanner400ApplicationJSON extends SpeakeasyBase {
    message?: string;
    requestId?: string;
    success?: boolean;
}
export declare class MaliciousUrlScanner200ApplicationJSONDomainAge extends SpeakeasyBase {
    human?: string;
    iso?: string;
    timestamp?: number;
}
/**
 * Successful response
 */
export declare class MaliciousUrlScanner200ApplicationJSON extends SpeakeasyBase {
    adult?: boolean;
    category?: string;
    contentType?: string;
    dnsValid?: boolean;
    domain?: string;
    domainAge?: MaliciousUrlScanner200ApplicationJSONDomainAge;
    domainRank?: number;
    ipAddress?: string;
    malware?: boolean;
    message?: string;
    pageSize?: number;
    parking?: boolean;
    phishing?: boolean;
    requestId?: string;
    riskScore?: number;
    server?: string;
    spamming?: boolean;
    statusCode?: number;
    success?: boolean;
    suspicious?: boolean;
    unsafe?: boolean;
}
export declare class MaliciousUrlScannerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    maliciousUrlScanner200ApplicationJSONObject?: MaliciousUrlScanner200ApplicationJSON;
    /**
     * Bad Request
     */
    maliciousUrlScanner400ApplicationJSONObject?: MaliciousUrlScanner400ApplicationJSON;
    /**
     * Unexpected error
     */
    maliciousUrlScanner500ApplicationJSONObject?: MaliciousUrlScanner500ApplicationJSON;
}
