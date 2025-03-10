import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The exchange reviewing the creative.
 */
export declare enum ExchangeReviewStatusExchangeEnum {
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
 * Status of the exchange review.
 */
export declare enum ExchangeReviewStatusStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED",
    ReviewStatusApproved = "REVIEW_STATUS_APPROVED",
    ReviewStatusRejected = "REVIEW_STATUS_REJECTED",
    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}
/**
 * Exchange review status for the creative.
 */
export declare class ExchangeReviewStatus extends SpeakeasyBase {
    /**
     * The exchange reviewing the creative.
     */
    exchange?: ExchangeReviewStatusExchangeEnum;
    /**
     * Status of the exchange review.
     */
    status?: ExchangeReviewStatusStatusEnum;
}
