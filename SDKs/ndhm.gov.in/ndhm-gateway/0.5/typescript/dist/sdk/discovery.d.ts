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
     * postV05CareContextsDiscover - Discover patient's accounts
     *
     * Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
     *   1. **At least one of the verified identifier matches**
     *   2. **Name (fuzzy), gender matches**
     *   3. **If YoB was given, age band(+-2) matches**
     *   4. **If unverified identifiers were given, one of them matches**
     *   5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
     *   6. **If there would be still more than one patients (after ranking) error would be returned**
     *   7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
     *   8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**
     *
    **/
    postV05CareContextsDiscover(req: operations.PostV05CareContextsDiscoverRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsDiscoverResponse>;
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
