import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://microvisor.twilio.com"];
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
     * deleteApp - Delete a specific App.
    **/
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * fetchApp - Fetch a specific App.
    **/
    fetchApp(req: operations.FetchAppRequest, config?: AxiosRequestConfig): Promise<operations.FetchAppResponse>;
    /**
     * fetchDevice - Fetch a specific Device.
    **/
    fetchDevice(req: operations.FetchDeviceRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeviceResponse>;
    /**
     * listApp - Retrieve a list of all Apps for an Account.
    **/
    listApp(req: operations.ListAppRequest, config?: AxiosRequestConfig): Promise<operations.ListAppResponse>;
    /**
     * listDevice - Retrieve a list of all Devices registered with the Account.
    **/
    listDevice(req: operations.ListDeviceRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceResponse>;
    /**
     * updateDevice - Update a specific Device.
    **/
    updateDevice(req: operations.UpdateDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceResponse>;
}
