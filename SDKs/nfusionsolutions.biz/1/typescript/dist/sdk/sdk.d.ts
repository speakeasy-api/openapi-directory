import { AxiosInstance } from "axios";
import { Currencies } from "./currencies";
import { Metals } from "./metals";
export declare const ServerList: readonly ["https://api.nfusionsolutions.biz"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    currencies: Currencies;
    metals: Metals;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
