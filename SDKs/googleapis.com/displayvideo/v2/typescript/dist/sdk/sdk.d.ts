import { Advertisers } from "./advertisers";
import { CombinedAudiences } from "./combinedaudiences";
import { CustomBiddingAlgorithms } from "./custombiddingalgorithms";
import { CustomLists } from "./customlists";
import { FirstAndThirdPartyAudiences } from "./firstandthirdpartyaudiences";
import { FloodlightGroups } from "./floodlightgroups";
import { GoogleAudiences } from "./googleaudiences";
import { GuaranteedOrders } from "./guaranteedorders";
import { InventorySourceGroups } from "./inventorysourcegroups";
import { InventorySources } from "./inventorysources";
import { Media } from "./media";
import { Partners } from "./partners";
import { Sdfdownloadtasks } from "./sdfdownloadtasks";
import { TargetingTypes } from "./targetingtypes";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://displayvideo.googleapis.com/"];
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
 * Display & Video 360 API allows users to automate complex Display & Video 360 workflows, such as creating insertion orders and setting targeting options for individual line items.
 *
 * @see {@link https://developers.google.com/display-video/}
 */
export declare class SDK {
    advertisers: Advertisers;
    combinedAudiences: CombinedAudiences;
    customBiddingAlgorithms: CustomBiddingAlgorithms;
    customLists: CustomLists;
    firstAndThirdPartyAudiences: FirstAndThirdPartyAudiences;
    floodlightGroups: FloodlightGroups;
    googleAudiences: GoogleAudiences;
    guaranteedOrders: GuaranteedOrders;
    inventorySourceGroups: InventorySourceGroups;
    inventorySources: InventorySources;
    media: Media;
    partners: Partners;
    sdfdownloadtasks: Sdfdownloadtasks;
    targetingTypes: TargetingTypes;
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
