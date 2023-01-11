import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Social {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * phoneCode - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
    **/
    phoneCode(req: operations.PhoneCodeRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeResponse>;
    /**
     * phoneCodeBatch - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
    **/
    phoneCodeBatch(req: operations.PhoneCodeBatchRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeBatchResponse>;
    /**
     * phoneCodeGeo - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
    **/
    phoneCodeGeo(req: operations.PhoneCodeGeoRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoResponse>;
    /**
     * phoneCodeGeoBatch - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
    **/
    phoneCodeGeoBatch(req: operations.PhoneCodeGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoBatchResponse>;
    /**
     * phoneCodeGeoFeedbackLoop - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
    **/
    phoneCodeGeoFeedbackLoop(req: operations.PhoneCodeGeoFeedbackLoopRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoFeedbackLoopResponse>;
}
