import { AxiosInstance } from "axios";
import { LanguageModelDirectAccess } from "./languagemodeldirectaccess";
export declare const ServerList: readonly ["https://api.tisane.ai"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    languageModelDirectAccess: LanguageModelDirectAccess;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
