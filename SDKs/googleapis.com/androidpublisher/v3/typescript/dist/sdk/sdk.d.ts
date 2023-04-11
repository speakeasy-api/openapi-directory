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
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://androidpublisher.googleapis.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Lets Android application developers access their Google Play accounts. At a high level, the expected workflow is to "insert" an Edit, make changes as necessary, and then "commit" it.
 *
 * @see {@link https://developers.google.com/android-publisher}
 */
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
    private _globals;
    constructor(props?: SDKProps);
}
