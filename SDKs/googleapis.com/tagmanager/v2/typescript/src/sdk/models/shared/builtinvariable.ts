/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update
 */
export enum BuiltInVariableTypeEnum {
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
  VisitorRegion = "visitorRegion",
}

/**
 * Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.
 */
export class BuiltInVariable extends SpeakeasyBase {
  /**
   * GTM Account ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  /**
   * GTM Container ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "containerId" })
  containerId?: string;

  /**
   * Name of the built-in variable to be used to refer to the built-in variable.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * GTM BuiltInVariable's API relative path.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path?: string;

  /**
   * Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: BuiltInVariableTypeEnum;

  /**
   * GTM Workspace ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workspaceId" })
  workspaceId?: string;
}
