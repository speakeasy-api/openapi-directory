import { AxiosInstance } from "axios";
import { EventNotification } from "./eventnotification";
export declare const ServerList: readonly ["https://openbanking.org.uk", "https://openbanking.org.uk/open-banking/v3.1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    eventNotification: EventNotification;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
