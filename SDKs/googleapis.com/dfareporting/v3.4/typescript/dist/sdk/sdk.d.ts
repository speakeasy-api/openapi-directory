import { AccountActiveAdSummaries } from "./accountactiveadsummaries";
import { AccountPermissionGroups } from "./accountpermissiongroups";
import { AccountPermissions } from "./accountpermissions";
import { Accounts } from "./accounts";
import { AccountUserProfiles } from "./accountuserprofiles";
import { Ads } from "./ads";
import { AdvertiserGroups } from "./advertisergroups";
import { AdvertiserLandingPages } from "./advertiserlandingpages";
import { Advertisers } from "./advertisers";
import { Browsers } from "./browsers";
import { CampaignCreativeAssociations } from "./campaigncreativeassociations";
import { Campaigns } from "./campaigns";
import { ChangeLogs } from "./changelogs";
import { Cities } from "./cities";
import { ConnectionTypes } from "./connectiontypes";
import { ContentCategories } from "./contentcategories";
import { Conversions } from "./conversions";
import { Countries } from "./countries";
import { CreativeAssets } from "./creativeassets";
import { CreativeFields } from "./creativefields";
import { CreativeFieldValues } from "./creativefieldvalues";
import { CreativeGroups } from "./creativegroups";
import { Creatives } from "./creatives";
import { CustomEvents } from "./customevents";
import { DimensionValues } from "./dimensionvalues";
import { DirectorySites } from "./directorysites";
import { DynamicTargetingKeys } from "./dynamictargetingkeys";
import { EventTags } from "./eventtags";
import { Files } from "./files";
import { FloodlightActivities } from "./floodlightactivities";
import { FloodlightActivityGroups } from "./floodlightactivitygroups";
import { FloodlightConfigurations } from "./floodlightconfigurations";
import { InventoryItems } from "./inventoryitems";
import { Languages } from "./languages";
import { Metros } from "./metros";
import { MobileApps } from "./mobileapps";
import { MobileCarriers } from "./mobilecarriers";
import { OperatingSystems } from "./operatingsystems";
import { OperatingSystemVersions } from "./operatingsystemversions";
import { OrderDocuments } from "./orderdocuments";
import { Orders } from "./orders";
import { PlacementGroups } from "./placementgroups";
import { Placements } from "./placements";
import { PlacementStrategies } from "./placementstrategies";
import { PlatformTypes } from "./platformtypes";
import { PostalCodes } from "./postalcodes";
import { Projects } from "./projects";
import { Regions } from "./regions";
import { RemarketingLists } from "./remarketinglists";
import { RemarketingListShares } from "./remarketinglistshares";
import { Reports } from "./reports";
import { Sites } from "./sites";
import { Sizes } from "./sizes";
import { Subaccounts } from "./subaccounts";
import { TargetableRemarketingLists } from "./targetableremarketinglists";
import { TargetingTemplates } from "./targetingtemplates";
import { UserProfiles } from "./userprofiles";
import { UserRolePermissionGroups } from "./userrolepermissiongroups";
import { UserRolePermissions } from "./userrolepermissions";
import { UserRoles } from "./userroles";
import { VideoFormats } from "./videoformats";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://dfareporting.googleapis.com/dfareporting/v3.4"];
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
 * Build applications to efficiently manage large or complex trafficking, reporting, and attribution workflows for Campaign Manager 360.
 *
 * @see {@link https://developers.google.com/doubleclick-advertisers/}
 */
export declare class SDK {
    accountActiveAdSummaries: AccountActiveAdSummaries;
    accountPermissionGroups: AccountPermissionGroups;
    accountPermissions: AccountPermissions;
    accountUserProfiles: AccountUserProfiles;
    accounts: Accounts;
    ads: Ads;
    advertiserGroups: AdvertiserGroups;
    advertiserLandingPages: AdvertiserLandingPages;
    advertisers: Advertisers;
    browsers: Browsers;
    campaignCreativeAssociations: CampaignCreativeAssociations;
    campaigns: Campaigns;
    changeLogs: ChangeLogs;
    cities: Cities;
    connectionTypes: ConnectionTypes;
    contentCategories: ContentCategories;
    conversions: Conversions;
    countries: Countries;
    creativeAssets: CreativeAssets;
    creativeFieldValues: CreativeFieldValues;
    creativeFields: CreativeFields;
    creativeGroups: CreativeGroups;
    creatives: Creatives;
    customEvents: CustomEvents;
    dimensionValues: DimensionValues;
    directorySites: DirectorySites;
    dynamicTargetingKeys: DynamicTargetingKeys;
    eventTags: EventTags;
    files: Files;
    floodlightActivities: FloodlightActivities;
    floodlightActivityGroups: FloodlightActivityGroups;
    floodlightConfigurations: FloodlightConfigurations;
    inventoryItems: InventoryItems;
    languages: Languages;
    metros: Metros;
    mobileApps: MobileApps;
    mobileCarriers: MobileCarriers;
    operatingSystemVersions: OperatingSystemVersions;
    operatingSystems: OperatingSystems;
    orderDocuments: OrderDocuments;
    orders: Orders;
    placementGroups: PlacementGroups;
    placementStrategies: PlacementStrategies;
    placements: Placements;
    platformTypes: PlatformTypes;
    postalCodes: PostalCodes;
    projects: Projects;
    regions: Regions;
    remarketingListShares: RemarketingListShares;
    remarketingLists: RemarketingLists;
    reports: Reports;
    sites: Sites;
    sizes: Sizes;
    subaccounts: Subaccounts;
    targetableRemarketingLists: TargetableRemarketingLists;
    targetingTemplates: TargetingTemplates;
    userProfiles: UserProfiles;
    userRolePermissionGroups: UserRolePermissionGroups;
    userRolePermissions: UserRolePermissions;
    userRoles: UserRoles;
    videoFormats: VideoFormats;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
