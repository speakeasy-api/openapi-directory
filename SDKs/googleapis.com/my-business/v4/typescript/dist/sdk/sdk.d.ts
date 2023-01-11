import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Attributes } from "./attributes";
import { Categories } from "./categories";
import { Chains } from "./chains";
import { GoogleLocations } from "./googlelocations";
export declare const ServerList: readonly ["https://mybusiness.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    attributes: Attributes;
    categories: Categories;
    chains: Chains;
    googleLocations: GoogleLocations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
