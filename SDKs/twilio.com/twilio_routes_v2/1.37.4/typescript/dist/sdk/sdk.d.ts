import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://routes.twilio.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * fetchPhoneNumber - Fetch the Inbound Processing Region assigned to a phone number.
    **/
    fetchPhoneNumber(req: operations.FetchPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    fetchSipDomain(req: operations.FetchSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipDomainResponse>;
    /**
     * fetchTrunks - Fetch the Inbound Processing Region assigned to a SIP Trunk.
    **/
    fetchTrunks(req: operations.FetchTrunksRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrunksResponse>;
    /**
     * updatePhoneNumber - Assign an Inbound Processing Region to a phone number.
    **/
    updatePhoneNumber(req: operations.UpdatePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneNumberResponse>;
    updateSipDomain(req: operations.UpdateSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSipDomainResponse>;
    /**
     * updateTrunks - Assign an Inbound Processing Region to a SIP Trunk
    **/
    updateTrunks(req: operations.UpdateTrunksRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrunksResponse>;
}
