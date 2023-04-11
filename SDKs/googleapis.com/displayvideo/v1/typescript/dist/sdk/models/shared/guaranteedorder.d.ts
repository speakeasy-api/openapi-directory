import { SpeakeasyBase } from "../../../internal/utils";
import { GuaranteedOrderStatus, GuaranteedOrderStatusInput } from "./guaranteedorderstatus";
/**
 * Required. Immutable. The exchange where the guaranteed order originated.
 */
export declare enum GuaranteedOrderExchangeEnum {
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
 * A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.
 */
export declare class GuaranteedOrderInput extends SpeakeasyBase {
    /**
     * The ID of the default campaign that is assigned to the guaranteed order. The default campaign must belong to the default advertiser.
     */
    defaultCampaignId?: string;
    /**
     * Required. The display name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Immutable. The exchange where the guaranteed order originated.
     */
    exchange?: GuaranteedOrderExchangeEnum;
    /**
     * Required. The publisher name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    publisherName?: string;
    /**
     * Whether all advertisers of read_write_partner_id have read access to the guaranteed order. Only applicable if read_write_partner_id is set. If True, overrides read_advertiser_ids.
     */
    readAccessInherited?: boolean;
    /**
     * The IDs of advertisers with read access to the guaranteed order. This field must not include the advertiser assigned to read_write_advertiser_id if it is set. All advertisers in this field must belong to read_write_partner_id or the same partner as read_write_advertiser_id.
     */
    readAdvertiserIds?: string[];
    /**
     * The advertiser with read/write access to the guaranteed order. This is also the default advertiser of the guaranteed order.
     */
    readWriteAdvertiserId?: string;
    /**
     * The partner with read/write access to the guaranteed order.
     */
    readWritePartnerId?: string;
    /**
     * The status settings of the guaranteed order.
     */
    status?: GuaranteedOrderStatusInput;
}
/**
 * A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.
 */
export declare class GuaranteedOrder extends SpeakeasyBase {
    /**
     * Output only. The ID of default advertiser of the guaranteed order. The default advertiser is either the read_write_advertiser_id or, if that is not set, the first advertiser listed in read_advertiser_ids. Otherwise, there is no default advertiser.
     */
    defaultAdvertiserId?: string;
    /**
     * The ID of the default campaign that is assigned to the guaranteed order. The default campaign must belong to the default advertiser.
     */
    defaultCampaignId?: string;
    /**
     * Required. The display name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Immutable. The exchange where the guaranteed order originated.
     */
    exchange?: GuaranteedOrderExchangeEnum;
    /**
     * Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`.
     */
    guaranteedOrderId?: string;
    /**
     * Output only. The legacy ID of the guaranteed order. Assigned by the original exchange. The legacy ID is unique within one exchange, but is not guaranteed to be unique across all guaranteed orders. This ID is used in SDF and UI.
     */
    legacyGuaranteedOrderId?: string;
    /**
     * Output only. The resource name of the guaranteed order.
     */
    name?: string;
    /**
     * Required. The publisher name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    publisherName?: string;
    /**
     * Whether all advertisers of read_write_partner_id have read access to the guaranteed order. Only applicable if read_write_partner_id is set. If True, overrides read_advertiser_ids.
     */
    readAccessInherited?: boolean;
    /**
     * The IDs of advertisers with read access to the guaranteed order. This field must not include the advertiser assigned to read_write_advertiser_id if it is set. All advertisers in this field must belong to read_write_partner_id or the same partner as read_write_advertiser_id.
     */
    readAdvertiserIds?: string[];
    /**
     * The advertiser with read/write access to the guaranteed order. This is also the default advertiser of the guaranteed order.
     */
    readWriteAdvertiserId?: string;
    /**
     * The partner with read/write access to the guaranteed order.
     */
    readWritePartnerId?: string;
    /**
     * The status settings of the guaranteed order.
     */
    status?: GuaranteedOrderStatus;
    /**
     * Output only. The timestamp when the guaranteed order was last updated. Assigned by the system.
     */
    updateTime?: string;
}
