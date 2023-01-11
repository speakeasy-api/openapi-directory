import { AxiosInstance } from "axios";
import { BranchController } from "./branchcontroller";
import { LandlordController } from "./landlordcontroller";
import { PhotoController } from "./photocontroller";
import { PropertyController } from "./propertycontroller";
import { SessionController } from "./sessioncontroller";
export declare const ServerList: readonly ["https://live-api.letmc.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
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
    constructor(props: SDKProps);
}
