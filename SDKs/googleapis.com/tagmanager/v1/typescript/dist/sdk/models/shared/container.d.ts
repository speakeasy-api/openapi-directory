import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContainerEnabledBuiltInVariableEnum {
    PageUrl = "pageUrl",
    PageHostname = "pageHostname",
    PagePath = "pagePath",
    Referrer = "referrer",
    Event = "event",
    ClickElement = "clickElement",
    ClickClasses = "clickClasses",
    ClickId = "clickId",
    ClickTarget = "clickTarget",
    ClickUrl = "clickUrl",
    ClickText = "clickText",
    FirstPartyServingUrl = "firstPartyServingUrl",
    FormElement = "formElement",
    FormClasses = "formClasses",
    FormId = "formId",
    FormTarget = "formTarget",
    FormUrl = "formUrl",
    FormText = "formText",
    EnvironmentName = "environmentName",
    ErrorMessage = "errorMessage",
    ErrorUrl = "errorUrl",
    ErrorLine = "errorLine",
    NewHistoryUrl = "newHistoryUrl",
    OldHistoryUrl = "oldHistoryUrl",
    NewHistoryFragment = "newHistoryFragment",
    OldHistoryFragment = "oldHistoryFragment",
    NewHistoryState = "newHistoryState",
    OldHistoryState = "oldHistoryState",
    HistorySource = "historySource",
    ContainerVersion = "containerVersion",
    DebugMode = "debugMode",
    RandomNumber = "randomNumber",
    ContainerId = "containerId",
    AppId = "appId",
    AppName = "appName",
    AppVersionCode = "appVersionCode",
    AppVersionName = "appVersionName",
    Language = "language",
    OsVersion = "osVersion",
    Platform = "platform",
    SDKVersion = "sdkVersion",
    DeviceName = "deviceName",
    Resolution = "resolution",
    AdvertiserId = "advertiserId",
    AdvertisingTrackingEnabled = "advertisingTrackingEnabled",
    HtmlId = "htmlId",
    AmpBrowserLanguage = "ampBrowserLanguage",
    AmpCanonicalPath = "ampCanonicalPath",
    AmpCanonicalUrl = "ampCanonicalUrl",
    AmpCanonicalHost = "ampCanonicalHost",
    AmpReferrer = "ampReferrer",
    AmpTitle = "ampTitle",
    AmpClientId = "ampClientId",
    AmpClientTimezone = "ampClientTimezone",
    AmpClientTimestamp = "ampClientTimestamp",
    AmpClientScreenWidth = "ampClientScreenWidth",
    AmpClientScreenHeight = "ampClientScreenHeight",
    AmpClientScrollX = "ampClientScrollX",
    AmpClientScrollY = "ampClientScrollY",
    AmpClientMaxScrollX = "ampClientMaxScrollX",
    AmpClientMaxScrollY = "ampClientMaxScrollY",
    AmpTotalEngagedTime = "ampTotalEngagedTime",
    AmpPageViewId = "ampPageViewId",
    AmpPageLoadTime = "ampPageLoadTime",
    AmpPageDownloadTime = "ampPageDownloadTime",
    AmpGtmEvent = "ampGtmEvent",
    EventName = "eventName",
    FirebaseEventParameterCampaign = "firebaseEventParameterCampaign",
    FirebaseEventParameterCampaignAclid = "firebaseEventParameterCampaignAclid",
    FirebaseEventParameterCampaignAnid = "firebaseEventParameterCampaignAnid",
    FirebaseEventParameterCampaignClickTimestamp = "firebaseEventParameterCampaignClickTimestamp",
    FirebaseEventParameterCampaignContent = "firebaseEventParameterCampaignContent",
    FirebaseEventParameterCampaignCp1 = "firebaseEventParameterCampaignCp1",
    FirebaseEventParameterCampaignGclid = "firebaseEventParameterCampaignGclid",
    FirebaseEventParameterCampaignSource = "firebaseEventParameterCampaignSource",
    FirebaseEventParameterCampaignTerm = "firebaseEventParameterCampaignTerm",
    FirebaseEventParameterCurrency = "firebaseEventParameterCurrency",
    FirebaseEventParameterDynamicLinkAcceptTime = "firebaseEventParameterDynamicLinkAcceptTime",
    FirebaseEventParameterDynamicLinkLinkid = "firebaseEventParameterDynamicLinkLinkid",
    FirebaseEventParameterNotificationMessageDeviceTime = "firebaseEventParameterNotificationMessageDeviceTime",
    FirebaseEventParameterNotificationMessageId = "firebaseEventParameterNotificationMessageId",
    FirebaseEventParameterNotificationMessageName = "firebaseEventParameterNotificationMessageName",
    FirebaseEventParameterNotificationMessageTime = "firebaseEventParameterNotificationMessageTime",
    FirebaseEventParameterNotificationTopic = "firebaseEventParameterNotificationTopic",
    FirebaseEventParameterPreviousAppVersion = "firebaseEventParameterPreviousAppVersion",
    FirebaseEventParameterPreviousOsVersion = "firebaseEventParameterPreviousOsVersion",
    FirebaseEventParameterPrice = "firebaseEventParameterPrice",
    FirebaseEventParameterProductId = "firebaseEventParameterProductId",
    FirebaseEventParameterQuantity = "firebaseEventParameterQuantity",
    FirebaseEventParameterValue = "firebaseEventParameterValue",
    VideoProvider = "videoProvider",
    VideoUrl = "videoUrl",
    VideoTitle = "videoTitle",
    VideoDuration = "videoDuration",
    VideoPercent = "videoPercent",
    VideoVisible = "videoVisible",
    VideoStatus = "videoStatus",
    VideoCurrentTime = "videoCurrentTime",
    ScrollDepthThreshold = "scrollDepthThreshold",
    ScrollDepthUnits = "scrollDepthUnits",
    ScrollDepthDirection = "scrollDepthDirection",
    ElementVisibilityRatio = "elementVisibilityRatio",
    ElementVisibilityTime = "elementVisibilityTime",
    ElementVisibilityFirstTime = "elementVisibilityFirstTime",
    ElementVisibilityRecentTime = "elementVisibilityRecentTime"
}
export declare enum ContainerUsageContextEnum {
    Web = "web",
    Android = "android",
    Ios = "ios",
    AndroidSdk5 = "androidSdk5",
    IosSdk5 = "iosSdk5",
    Amp = "amp"
}
/**
 * Represents a Google Tag Manager Container.
 */
export declare class Container extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * The Container ID uniquely identifies the GTM Container.
     */
    containerId?: string;
    /**
     * Optional list of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    domainName?: string[];
    /**
     * List of enabled built-in variables. Valid values include: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    enabledBuiltInVariable?: ContainerEnabledBuiltInVariableEnum[];
    /**
     * The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
     */
    fingerprint?: string;
    /**
     * Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    name?: string;
    /**
     * Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    notes?: string;
    /**
     * Container Public ID.
     */
    publicId?: string;
    /**
     * Container Country ID. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    timeZoneCountryId?: string;
    /**
     * Container Time Zone ID. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    timeZoneId?: string;
    /**
     * List of Usage Contexts for the Container. Valid values include: web, android, ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
     */
    usageContext?: ContainerUsageContextEnum[];
}
