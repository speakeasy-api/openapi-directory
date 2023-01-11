import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://monitor.twilio.com"];
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
    fetchAlert(req: operations.FetchAlertRequest, config?: AxiosRequestConfig): Promise<operations.FetchAlertResponse>;
    fetchEvent(req: operations.FetchEventRequest, config?: AxiosRequestConfig): Promise<operations.FetchEventResponse>;
    listAlert(req: operations.ListAlertRequest, config?: AxiosRequestConfig): Promise<operations.ListAlertResponse>;
    /**
     * listEvent - Returns a list of events in the account, sorted by event-date.
    **/
    listEvent(req: operations.ListEventRequest, config?: AxiosRequestConfig): Promise<operations.ListEventResponse>;
}
