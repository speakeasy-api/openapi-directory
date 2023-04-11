import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ExternalAmbassadorAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    predictJson(req: operations.PredictJsonRequest, security: operations.PredictJsonSecurity, config?: AxiosRequestConfig): Promise<operations.PredictJsonResponse>;
    predictRaw(req: operations.PredictRawRequest, security: operations.PredictRawSecurity, config?: AxiosRequestConfig): Promise<operations.PredictRawResponse>;
    predictString(req: operations.PredictStringRequest, security: operations.PredictStringSecurity, config?: AxiosRequestConfig): Promise<operations.PredictStringResponse>;
    sendFeedback(req: operations.SendFeedbackRequest, security: operations.SendFeedbackSecurity, config?: AxiosRequestConfig): Promise<operations.SendFeedbackResponse>;
}
