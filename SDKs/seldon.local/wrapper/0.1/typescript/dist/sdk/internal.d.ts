import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Internal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    aggregate2(req: operations.Aggregate2RequestBody, config?: AxiosRequestConfig): Promise<operations.Aggregate2Response>;
    route(req: operations.RouteRequestBody, config?: AxiosRequestConfig): Promise<operations.RouteResponse>;
    sendFeedback(req: operations.SendFeedbackRequestBody, config?: AxiosRequestConfig): Promise<operations.SendFeedbackResponse>;
    transformInput(req: operations.TransformInputRequestBody, config?: AxiosRequestConfig): Promise<operations.TransformInputResponse>;
    transformInput3(req: operations.TransformInput3RequestBody, config?: AxiosRequestConfig): Promise<operations.TransformInput3Response>;
    transformOutput(req: operations.TransformOutputRequestBody, config?: AxiosRequestConfig): Promise<operations.TransformOutputResponse>;
}
