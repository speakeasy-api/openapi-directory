import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Discovery {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05CareContextsOnDiscover - Response to patient's account discovery request
     *
     * Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be
     *   1. **more than one definitive match for the given request**
     *   2. **no verified identifer was specified**
     *
    **/
    postV05CareContextsOnDiscover(req: operations.PostV05CareContextsOnDiscoverRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsOnDiscoverResponse>;
}
