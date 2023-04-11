import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Discovery {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Response to patient's account discovery request
     *
     * @remarks
     * Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be
     *   1. **more than one definitive match for the given request**
     *   2. **no verified identifer was specified**
     *
     */
    postV05CareContextsOnDiscoverJson(req: operations.PostV05CareContextsOnDiscoverJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsOnDiscoverJsonResponse>;
    /**
     * Response to patient's account discovery request
     *
     * @remarks
     * Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be
     *   1. **more than one definitive match for the given request**
     *   2. **no verified identifer was specified**
     *
     */
    postV05CareContextsOnDiscoverRaw(req: operations.PostV05CareContextsOnDiscoverRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsOnDiscoverRawResponse>;
}
