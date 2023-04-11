import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeConfig } from "./creativeconfig";
import { InventorySourceAccessors } from "./inventorysourceaccessors";
import { InventorySourceStatus, InventorySourceStatusInput } from "./inventorysourcestatus";
import { RateDetails } from "./ratedetails";
import { TimeRange } from "./timerange";
/**
 * Whether the inventory source has a guaranteed or non-guaranteed delivery.
 */
export declare enum InventorySourceCommitmentEnum {
    InventorySourceCommitmentUnspecified = "INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED",
    InventorySourceCommitmentGuaranteed = "INVENTORY_SOURCE_COMMITMENT_GUARANTEED",
    InventorySourceCommitmentNonGuaranteed = "INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED"
}
/**
 * The delivery method of the inventory source. * For non-guaranteed inventory sources, the only acceptable value is `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`. * For guaranteed inventory sources, acceptable values are `INVENTORY_SOURCE_DELIVERY_METHOD_TAG` and `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`.
 */
export declare enum InventorySourceDeliveryMethodEnum {
    InventorySourceDeliveryMethodUnspecified = "INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED",
    InventorySourceDeliveryMethodProgrammatic = "INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC",
    InventorySourceDeliveryMethodTag = "INVENTORY_SOURCE_DELIVERY_METHOD_TAG"
}
/**
 * The exchange to which the inventory source belongs.
 */
export declare enum InventorySourceExchangeEnum {
    ExchangeUnspecified = "EXCHANGE_UNSPECIFIED",
    ExchangeGoogleAdManager = "EXCHANGE_GOOGLE_AD_MANAGER",
    ExchangeAppnexus = "EXCHANGE_APPNEXUS",
    ExchangeBrightroll = "EXCHANGE_BRIGHTROLL",
    ExchangeAdform = "EXCHANGE_ADFORM",
    ExchangeAdmeta = "EXCHANGE_ADMETA",
    ExchangeAdmixer = "EXCHANGE_ADMIXER",
    ExchangeAdsmogo = "EXCHANGE_ADSMOGO",
    ExchangeAdswizz = "EXCHANGE_ADSWIZZ",
    ExchangeBidswitch = "EXCHANGE_BIDSWITCH",
    ExchangeBrightrollDisplay = "EXCHANGE_BRIGHTROLL_DISPLAY",
    ExchangeCadreon = "EXCHANGE_CADREON",
    ExchangeDailymotion = "EXCHANGE_DAILYMOTION",
    ExchangeFive = "EXCHANGE_FIVE",
    ExchangeFluct = "EXCHANGE_FLUCT",
    ExchangeFreewheel = "EXCHANGE_FREEWHEEL",
    ExchangeGeniee = "EXCHANGE_GENIEE",
    ExchangeGumgum = "EXCHANGE_GUMGUM",
    ExchangeImobile = "EXCHANGE_IMOBILE",
    ExchangeIbillboard = "EXCHANGE_IBILLBOARD",
    ExchangeImproveDigital = "EXCHANGE_IMPROVE_DIGITAL",
    ExchangeIndex = "EXCHANGE_INDEX",
    ExchangeKargo = "EXCHANGE_KARGO",
    ExchangeMicroad = "EXCHANGE_MICROAD",
    ExchangeMopub = "EXCHANGE_MOPUB",
    ExchangeNend = "EXCHANGE_NEND",
    ExchangeOneByAolDisplay = "EXCHANGE_ONE_BY_AOL_DISPLAY",
    ExchangeOneByAolMobile = "EXCHANGE_ONE_BY_AOL_MOBILE",
    ExchangeOneByAolVideo = "EXCHANGE_ONE_BY_AOL_VIDEO",
    ExchangeOoyala = "EXCHANGE_OOYALA",
    ExchangeOpenx = "EXCHANGE_OPENX",
    ExchangePermodo = "EXCHANGE_PERMODO",
    ExchangePlatformone = "EXCHANGE_PLATFORMONE",
    ExchangePlatformid = "EXCHANGE_PLATFORMID",
    ExchangePubmatic = "EXCHANGE_PUBMATIC",
    ExchangePulsepoint = "EXCHANGE_PULSEPOINT",
    ExchangeRevenuemax = "EXCHANGE_REVENUEMAX",
    ExchangeRubicon = "EXCHANGE_RUBICON",
    ExchangeSmartclip = "EXCHANGE_SMARTCLIP",
    ExchangeSmartrtb = "EXCHANGE_SMARTRTB",
    ExchangeSmartstreamtv = "EXCHANGE_SMARTSTREAMTV",
    ExchangeSovrn = "EXCHANGE_SOVRN",
    ExchangeSpotxchange = "EXCHANGE_SPOTXCHANGE",
    ExchangeStroer = "EXCHANGE_STROER",
    ExchangeTeadstv = "EXCHANGE_TEADSTV",
    ExchangeTelaria = "EXCHANGE_TELARIA",
    ExchangeTvn = "EXCHANGE_TVN",
    ExchangeUnited = "EXCHANGE_UNITED",
    ExchangeYieldlab = "EXCHANGE_YIELDLAB",
    ExchangeYieldmo = "EXCHANGE_YIELDMO",
    ExchangeUnrulyx = "EXCHANGE_UNRULYX",
    ExchangeOpen8 = "EXCHANGE_OPEN8",
    ExchangeTriton = "EXCHANGE_TRITON",
    ExchangeTriplelift = "EXCHANGE_TRIPLELIFT",
    ExchangeTaboola = "EXCHANGE_TABOOLA",
    ExchangeInmobi = "EXCHANGE_INMOBI",
    ExchangeSmaato = "EXCHANGE_SMAATO",
    ExchangeAja = "EXCHANGE_AJA",
    ExchangeSupership = "EXCHANGE_SUPERSHIP",
    ExchangeNexstarDigital = "EXCHANGE_NEXSTAR_DIGITAL",
    ExchangeWaze = "EXCHANGE_WAZE",
    ExchangeSoundcast = "EXCHANGE_SOUNDCAST",
    ExchangeSharethrough = "EXCHANGE_SHARETHROUGH",
    ExchangeFyber = "EXCHANGE_FYBER",
    ExchangeRedForPublishers = "EXCHANGE_RED_FOR_PUBLISHERS",
    ExchangeMedianet = "EXCHANGE_MEDIANET",
    ExchangeTapjoy = "EXCHANGE_TAPJOY",
    ExchangeVistar = "EXCHANGE_VISTAR",
    ExchangeDax = "EXCHANGE_DAX",
    ExchangeJcd = "EXCHANGE_JCD",
    ExchangePlaceExchange = "EXCHANGE_PLACE_EXCHANGE",
    ExchangeApplovin = "EXCHANGE_APPLOVIN",
    ExchangeConnatix = "EXCHANGE_CONNATIX",
    ExchangeResetDigital = "EXCHANGE_RESET_DIGITAL",
    ExchangeHivestack = "EXCHANGE_HIVESTACK"
}
/**
 * Denotes the type of the inventory source.
 */
export declare enum InventorySourceInventorySourceTypeEnum {
    InventorySourceTypeUnspecified = "INVENTORY_SOURCE_TYPE_UNSPECIFIED",
    InventorySourceTypePrivate = "INVENTORY_SOURCE_TYPE_PRIVATE",
    InventorySourceTypeAuctionPackage = "INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE"
}
/**
 * An inventory source.
 */
export declare class InventorySourceInput extends SpeakeasyBase {
    /**
     * Whether the inventory source has a guaranteed or non-guaranteed delivery.
     */
    commitment?: InventorySourceCommitmentEnum;
    /**
     * The creative requirements of the inventory source. Not applicable for auction packages.
     */
    creativeConfigs?: CreativeConfig[];
    /**
     * The ID in the exchange space that uniquely identifies the inventory source. Must be unique across buyers within each exchange but not necessarily unique across exchanges.
     */
    dealId?: string;
    /**
     * The delivery method of the inventory source. * For non-guaranteed inventory sources, the only acceptable value is `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`. * For guaranteed inventory sources, acceptable values are `INVENTORY_SOURCE_DELIVERY_METHOD_TAG` and `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`.
     */
    deliveryMethod?: InventorySourceDeliveryMethodEnum;
    /**
     * The display name of the inventory source. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * The exchange to which the inventory source belongs.
     */
    exchange?: InventorySourceExchangeEnum;
    /**
     * Immutable. The ID of the guaranteed order that this inventory source belongs to. Only applicable when commitment is `INVENTORY_SOURCE_COMMITMENT_GUARANTEED`.
     */
    guaranteedOrderId?: string;
    /**
     * Denotes the type of the inventory source.
     */
    inventorySourceType?: InventorySourceInventorySourceTypeEnum;
    /**
     * The publisher/seller name of the inventory source.
     */
    publisherName?: string;
    /**
     * The rate related settings of the inventory source.
     */
    rateDetails?: RateDetails;
    /**
     * The partner or advertisers with access to the inventory source.
     */
    readWriteAccessors?: InventorySourceAccessors;
    /**
     * The status related settings of the inventory source.
     */
    status?: InventorySourceStatusInput;
    /**
     * Immutable. The unique ID of the sub-site property assigned to this inventory source.
     */
    subSitePropertyId?: string;
    /**
     * A time range.
     */
    timeRange?: TimeRange;
}
/**
 * Output only. The product type of the inventory source, denoting the way through which it sells inventory.
 */
export declare enum InventorySourceInventorySourceProductTypeEnum {
    InventorySourceProductTypeUnspecified = "INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED",
    PreferredDeal = "PREFERRED_DEAL",
    PrivateAuction = "PRIVATE_AUCTION",
    ProgrammaticGuaranteed = "PROGRAMMATIC_GUARANTEED",
    TagGuaranteed = "TAG_GUARANTEED",
    YoutubeReserve = "YOUTUBE_RESERVE",
    InstantReserve = "INSTANT_RESERVE",
    GuaranteedPackage = "GUARANTEED_PACKAGE",
    ProgrammaticTv = "PROGRAMMATIC_TV",
    AuctionPackage = "AUCTION_PACKAGE"
}
/**
 * An inventory source.
 */
export declare class InventorySource extends SpeakeasyBase {
    /**
     * Whether the inventory source has a guaranteed or non-guaranteed delivery.
     */
    commitment?: InventorySourceCommitmentEnum;
    /**
     * The creative requirements of the inventory source. Not applicable for auction packages.
     */
    creativeConfigs?: CreativeConfig[];
    /**
     * The ID in the exchange space that uniquely identifies the inventory source. Must be unique across buyers within each exchange but not necessarily unique across exchanges.
     */
    dealId?: string;
    /**
     * The delivery method of the inventory source. * For non-guaranteed inventory sources, the only acceptable value is `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`. * For guaranteed inventory sources, acceptable values are `INVENTORY_SOURCE_DELIVERY_METHOD_TAG` and `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`.
     */
    deliveryMethod?: InventorySourceDeliveryMethodEnum;
    /**
     * The display name of the inventory source. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * The exchange to which the inventory source belongs.
     */
    exchange?: InventorySourceExchangeEnum;
    /**
     * Immutable. The ID of the guaranteed order that this inventory source belongs to. Only applicable when commitment is `INVENTORY_SOURCE_COMMITMENT_GUARANTEED`.
     */
    guaranteedOrderId?: string;
    /**
     * Output only. The unique ID of the inventory source. Assigned by the system.
     */
    inventorySourceId?: string;
    /**
     * Output only. The product type of the inventory source, denoting the way through which it sells inventory.
     */
    inventorySourceProductType?: InventorySourceInventorySourceProductTypeEnum;
    /**
     * Denotes the type of the inventory source.
     */
    inventorySourceType?: InventorySourceInventorySourceTypeEnum;
    /**
     * Output only. The resource name of the inventory source.
     */
    name?: string;
    /**
     * The publisher/seller name of the inventory source.
     */
    publisherName?: string;
    /**
     * The rate related settings of the inventory source.
     */
    rateDetails?: RateDetails;
    /**
     * Output only. The IDs of advertisers with read-only access to the inventory source.
     */
    readAdvertiserIds?: string[];
    /**
     * Output only. The IDs of partners with read-only access to the inventory source. All advertisers of partners in this field inherit read-only access to the inventory source.
     */
    readPartnerIds?: string[];
    /**
     * The partner or advertisers with access to the inventory source.
     */
    readWriteAccessors?: InventorySourceAccessors;
    /**
     * The status related settings of the inventory source.
     */
    status?: InventorySourceStatus;
    /**
     * Immutable. The unique ID of the sub-site property assigned to this inventory source.
     */
    subSitePropertyId?: string;
    /**
     * A time range.
     */
    timeRange?: TimeRange;
    /**
     * Output only. The timestamp when the inventory source was last updated. Assigned by the system.
     */
    updateTime?: string;
}
