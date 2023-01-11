import { AxiosInstance } from "axios";
import { Frontend } from "./frontend";
import { Translate } from "./translate";
export declare const ServerList: readonly ["http://libretranslate.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    frontend: Frontend;
    translate: Translate;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
