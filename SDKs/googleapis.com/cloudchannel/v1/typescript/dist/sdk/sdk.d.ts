import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Operations } from "./operations";
import { Products } from "./products";
export declare const ServerList: readonly ["https://cloudchannel.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    operations: Operations;
    products: Products;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
