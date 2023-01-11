import { AxiosInstance } from "axios";
import { ManagedShortLinks } from "./managedshortlinks";
import { ShortLinks } from "./shortlinks";
import { V1 } from "./v1";
export declare const ServerList: readonly ["https://firebasedynamiclinks.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    managedShortLinks: ManagedShortLinks;
    shortLinks: ShortLinks;
    v1: V1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
