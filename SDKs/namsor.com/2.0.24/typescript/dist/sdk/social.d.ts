import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Social media and pseudonyms
 */
export declare class Social {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
     */
    phoneCode(req: operations.PhoneCodeRequest, security: operations.PhoneCodeSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneCodeResponse>;
    /**
     * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
     */
    phoneCodeBatch(req: shared.BatchFirstLastNamePhoneNumberIn, security: operations.PhoneCodeBatchSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneCodeBatchResponse>;
    /**
     * [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
     */
    phoneCodeGeo(req: operations.PhoneCodeGeoRequest, security: operations.PhoneCodeGeoSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoResponse>;
    /**
     * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
     */
    phoneCodeGeoBatch(req: shared.BatchFirstLastNamePhoneNumberGeoIn, security: operations.PhoneCodeGeoBatchSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoBatchResponse>;
    /**
     * [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
     */
    phoneCodeGeoFeedbackLoop(req: operations.PhoneCodeGeoFeedbackLoopRequest, security: operations.PhoneCodeGeoFeedbackLoopSecurity, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoFeedbackLoopResponse>;
}
