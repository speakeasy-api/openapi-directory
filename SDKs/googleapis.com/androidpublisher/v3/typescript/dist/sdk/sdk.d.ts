import { AxiosInstance } from "axios";
import { Applications } from "./applications";
import { Edits } from "./edits";
import { Generatedapks } from "./generatedapks";
import { Grants } from "./grants";
import { Inappproducts } from "./inappproducts";
import { Internalappsharingartifacts } from "./internalappsharingartifacts";
import { Monetization } from "./monetization";
import { Orders } from "./orders";
import { Purchases } from "./purchases";
import { Reviews } from "./reviews";
import { Systemapks } from "./systemapks";
import { Users } from "./users";
export declare const ServerList: readonly ["https://androidpublisher.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    applications: Applications;
    edits: Edits;
    generatedapks: Generatedapks;
    grants: Grants;
    inappproducts: Inappproducts;
    internalappsharingartifacts: Internalappsharingartifacts;
    monetization: Monetization;
    orders: Orders;
    purchases: Purchases;
    reviews: Reviews;
    systemapks: Systemapks;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
