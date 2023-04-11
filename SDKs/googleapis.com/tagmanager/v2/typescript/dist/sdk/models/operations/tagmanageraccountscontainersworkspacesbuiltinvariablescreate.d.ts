import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum {
    BuiltInVariableTypeUnspecified = "builtInVariableTypeUnspecified",
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
    EnvironmentName = "environmentName",
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
    ElementVisibilityRecentTime = "elementVisibilityRecentTime",
    RequestPath = "requestPath",
    RequestMethod = "requestMethod",
    ClientName = "clientName",
    QueryString = "queryString",
    ServerPageLocationUrl = "serverPageLocationUrl",
    ServerPageLocationPath = "serverPageLocationPath",
    ServerPageLocationHostname = "serverPageLocationHostname",
    VisitorRegion = "visitorRegion"
}
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The types of built-in variables to enable.
     */
    type?: TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    createBuiltInVariableResponse?: shared.CreateBuiltInVariableResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
