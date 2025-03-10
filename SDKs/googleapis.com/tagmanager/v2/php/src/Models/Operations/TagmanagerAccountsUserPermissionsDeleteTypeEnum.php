<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


enum TagmanagerAccountsUserPermissionsDeleteTypeEnum: string
{
    case BUILT_IN_VARIABLE_TYPE_UNSPECIFIED = 'builtInVariableTypeUnspecified';
    case PAGE_URL = 'pageUrl';
    case PAGE_HOSTNAME = 'pageHostname';
    case PAGE_PATH = 'pagePath';
    case REFERRER = 'referrer';
    case EVENT = 'event';
    case CLICK_ELEMENT = 'clickElement';
    case CLICK_CLASSES = 'clickClasses';
    case CLICK_ID = 'clickId';
    case CLICK_TARGET = 'clickTarget';
    case CLICK_URL = 'clickUrl';
    case CLICK_TEXT = 'clickText';
    case FIRST_PARTY_SERVING_URL = 'firstPartyServingUrl';
    case FORM_ELEMENT = 'formElement';
    case FORM_CLASSES = 'formClasses';
    case FORM_ID = 'formId';
    case FORM_TARGET = 'formTarget';
    case FORM_URL = 'formUrl';
    case FORM_TEXT = 'formText';
    case ERROR_MESSAGE = 'errorMessage';
    case ERROR_URL = 'errorUrl';
    case ERROR_LINE = 'errorLine';
    case NEW_HISTORY_URL = 'newHistoryUrl';
    case OLD_HISTORY_URL = 'oldHistoryUrl';
    case NEW_HISTORY_FRAGMENT = 'newHistoryFragment';
    case OLD_HISTORY_FRAGMENT = 'oldHistoryFragment';
    case NEW_HISTORY_STATE = 'newHistoryState';
    case OLD_HISTORY_STATE = 'oldHistoryState';
    case HISTORY_SOURCE = 'historySource';
    case CONTAINER_VERSION = 'containerVersion';
    case DEBUG_MODE = 'debugMode';
    case RANDOM_NUMBER = 'randomNumber';
    case CONTAINER_ID = 'containerId';
    case APP_ID = 'appId';
    case APP_NAME = 'appName';
    case APP_VERSION_CODE = 'appVersionCode';
    case APP_VERSION_NAME = 'appVersionName';
    case LANGUAGE = 'language';
    case OS_VERSION = 'osVersion';
    case PLATFORM = 'platform';
    case SDK_VERSION = 'sdkVersion';
    case DEVICE_NAME = 'deviceName';
    case RESOLUTION = 'resolution';
    case ADVERTISER_ID = 'advertiserId';
    case ADVERTISING_TRACKING_ENABLED = 'advertisingTrackingEnabled';
    case HTML_ID = 'htmlId';
    case ENVIRONMENT_NAME = 'environmentName';
    case AMP_BROWSER_LANGUAGE = 'ampBrowserLanguage';
    case AMP_CANONICAL_PATH = 'ampCanonicalPath';
    case AMP_CANONICAL_URL = 'ampCanonicalUrl';
    case AMP_CANONICAL_HOST = 'ampCanonicalHost';
    case AMP_REFERRER = 'ampReferrer';
    case AMP_TITLE = 'ampTitle';
    case AMP_CLIENT_ID = 'ampClientId';
    case AMP_CLIENT_TIMEZONE = 'ampClientTimezone';
    case AMP_CLIENT_TIMESTAMP = 'ampClientTimestamp';
    case AMP_CLIENT_SCREEN_WIDTH = 'ampClientScreenWidth';
    case AMP_CLIENT_SCREEN_HEIGHT = 'ampClientScreenHeight';
    case AMP_CLIENT_SCROLL_X = 'ampClientScrollX';
    case AMP_CLIENT_SCROLL_Y = 'ampClientScrollY';
    case AMP_CLIENT_MAX_SCROLL_X = 'ampClientMaxScrollX';
    case AMP_CLIENT_MAX_SCROLL_Y = 'ampClientMaxScrollY';
    case AMP_TOTAL_ENGAGED_TIME = 'ampTotalEngagedTime';
    case AMP_PAGE_VIEW_ID = 'ampPageViewId';
    case AMP_PAGE_LOAD_TIME = 'ampPageLoadTime';
    case AMP_PAGE_DOWNLOAD_TIME = 'ampPageDownloadTime';
    case AMP_GTM_EVENT = 'ampGtmEvent';
    case EVENT_NAME = 'eventName';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN = 'firebaseEventParameterCampaign';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN_ACLID = 'firebaseEventParameterCampaignAclid';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN_ANID = 'firebaseEventParameterCampaignAnid';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN_CLICK_TIMESTAMP = 'firebaseEventParameterCampaignClickTimestamp';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN_CONTENT = 'firebaseEventParameterCampaignContent';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN_CP1 = 'firebaseEventParameterCampaignCp1';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN_GCLID = 'firebaseEventParameterCampaignGclid';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN_SOURCE = 'firebaseEventParameterCampaignSource';
    case FIREBASE_EVENT_PARAMETER_CAMPAIGN_TERM = 'firebaseEventParameterCampaignTerm';
    case FIREBASE_EVENT_PARAMETER_CURRENCY = 'firebaseEventParameterCurrency';
    case FIREBASE_EVENT_PARAMETER_DYNAMIC_LINK_ACCEPT_TIME = 'firebaseEventParameterDynamicLinkAcceptTime';
    case FIREBASE_EVENT_PARAMETER_DYNAMIC_LINK_LINKID = 'firebaseEventParameterDynamicLinkLinkid';
    case FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_DEVICE_TIME = 'firebaseEventParameterNotificationMessageDeviceTime';
    case FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_ID = 'firebaseEventParameterNotificationMessageId';
    case FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_NAME = 'firebaseEventParameterNotificationMessageName';
    case FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_TIME = 'firebaseEventParameterNotificationMessageTime';
    case FIREBASE_EVENT_PARAMETER_NOTIFICATION_TOPIC = 'firebaseEventParameterNotificationTopic';
    case FIREBASE_EVENT_PARAMETER_PREVIOUS_APP_VERSION = 'firebaseEventParameterPreviousAppVersion';
    case FIREBASE_EVENT_PARAMETER_PREVIOUS_OS_VERSION = 'firebaseEventParameterPreviousOsVersion';
    case FIREBASE_EVENT_PARAMETER_PRICE = 'firebaseEventParameterPrice';
    case FIREBASE_EVENT_PARAMETER_PRODUCT_ID = 'firebaseEventParameterProductId';
    case FIREBASE_EVENT_PARAMETER_QUANTITY = 'firebaseEventParameterQuantity';
    case FIREBASE_EVENT_PARAMETER_VALUE = 'firebaseEventParameterValue';
    case VIDEO_PROVIDER = 'videoProvider';
    case VIDEO_URL = 'videoUrl';
    case VIDEO_TITLE = 'videoTitle';
    case VIDEO_DURATION = 'videoDuration';
    case VIDEO_PERCENT = 'videoPercent';
    case VIDEO_VISIBLE = 'videoVisible';
    case VIDEO_STATUS = 'videoStatus';
    case VIDEO_CURRENT_TIME = 'videoCurrentTime';
    case SCROLL_DEPTH_THRESHOLD = 'scrollDepthThreshold';
    case SCROLL_DEPTH_UNITS = 'scrollDepthUnits';
    case SCROLL_DEPTH_DIRECTION = 'scrollDepthDirection';
    case ELEMENT_VISIBILITY_RATIO = 'elementVisibilityRatio';
    case ELEMENT_VISIBILITY_TIME = 'elementVisibilityTime';
    case ELEMENT_VISIBILITY_FIRST_TIME = 'elementVisibilityFirstTime';
    case ELEMENT_VISIBILITY_RECENT_TIME = 'elementVisibilityRecentTime';
    case REQUEST_PATH = 'requestPath';
    case REQUEST_METHOD = 'requestMethod';
    case CLIENT_NAME = 'clientName';
    case QUERY_STRING = 'queryString';
    case SERVER_PAGE_LOCATION_URL = 'serverPageLocationUrl';
    case SERVER_PAGE_LOCATION_PATH = 'serverPageLocationPath';
    case SERVER_PAGE_LOCATION_HOSTNAME = 'serverPageLocationHostname';
    case VISITOR_REGION = 'visitorRegion';
}
