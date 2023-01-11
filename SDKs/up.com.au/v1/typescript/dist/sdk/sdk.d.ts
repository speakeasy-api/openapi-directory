import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Accounts } from "./accounts";
import { Categories } from "./categories";
import { Tags } from "./tags";
import { Transactions } from "./transactions";
import { UtilityEndpoints } from "./utilityendpoints";
import { Webhooks } from "./webhooks";
export declare const ServerList: readonly ["https://api.up.com.au/api/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    categories: Categories;
    tags: Tags;
    transactions: Transactions;
    utilityEndpoints: UtilityEndpoints;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
