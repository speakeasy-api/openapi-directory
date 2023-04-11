import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This is the "home page" of the API you can get important autentication information for the user making the request and get links to other resources.
 */
export declare class Base {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Root
     *
     * @remarks
     * #### Returns
     * A JSON object with `meta` and `links` keys.
     *
     * The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.
     *
     * The `links` key contains links to the following entity collections: [addons](#tag/Addons), [collections](), [institutions](#tag/Institutions), [licenses](#tag/Licenses), [registration schemas](#tag/Registration Schemas), [nodes](#tag/Nodes), [registrations](#tag/Registrations), [users](#tag/Users)
     */
    baseRead(config?: AxiosRequestConfig): Promise<operations.BaseReadResponse>;
}
