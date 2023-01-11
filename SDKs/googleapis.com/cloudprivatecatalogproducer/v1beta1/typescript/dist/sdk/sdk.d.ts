import { AxiosInstance } from "axios";
import { Catalogs } from "./catalogs";
import { Operations } from "./operations";
export declare const ServerList: readonly ["https://cloudprivatecatalogproducer.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    catalogs: Catalogs;
    operations: Operations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
