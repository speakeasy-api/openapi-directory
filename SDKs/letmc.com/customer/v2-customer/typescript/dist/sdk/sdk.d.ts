import { BranchController } from "./branchcontroller";
import { LandlordController } from "./landlordcontroller";
import { PhotoController } from "./photocontroller";
import { PropertyController } from "./propertycontroller";
import { SessionController } from "./sessioncontroller";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://live-api.letmc.com"];
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
export declare class SDK {
    branchController: BranchController;
    landlordController: LandlordController;
    photoController: PhotoController;
    propertyController: PropertyController;
    sessionController: SessionController;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
