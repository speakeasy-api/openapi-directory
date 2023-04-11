import { Devices } from "./devices";
import { Enterprises } from "./enterprises";
import { Entitlements } from "./entitlements";
import { Grouplicenses } from "./grouplicenses";
import { Grouplicenseusers } from "./grouplicenseusers";
import { Installs } from "./installs";
import { Managedconfigurationsfordevice } from "./managedconfigurationsfordevice";
import { Managedconfigurationsforuser } from "./managedconfigurationsforuser";
import { Managedconfigurationssettings } from "./managedconfigurationssettings";
import { Permissions } from "./permissions";
import { Products } from "./products";
import { Serviceaccountkeys } from "./serviceaccountkeys";
import { Storelayoutclusters } from "./storelayoutclusters";
import { Storelayoutpages } from "./storelayoutpages";
import { Users } from "./users";
import { Webapps } from "./webapps";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://androidenterprise.googleapis.com/"];
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
 * Manages the deployment of apps to Android Enterprise devices.
 *
 * @see {@link https://developers.google.com/android/work/play/emm-api}
 */
export declare class SDK {
    devices: Devices;
    enterprises: Enterprises;
    entitlements: Entitlements;
    grouplicenses: Grouplicenses;
    grouplicenseusers: Grouplicenseusers;
    installs: Installs;
    managedconfigurationsfordevice: Managedconfigurationsfordevice;
    managedconfigurationsforuser: Managedconfigurationsforuser;
    managedconfigurationssettings: Managedconfigurationssettings;
    permissions: Permissions;
    products: Products;
    serviceaccountkeys: Serviceaccountkeys;
    storelayoutclusters: Storelayoutclusters;
    storelayoutpages: Storelayoutpages;
    users: Users;
    webapps: Webapps;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
