import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Link event.
 */
export declare enum DynamicLinkEventStatEventEnum {
    DynamicLinkEventUnspecified = "DYNAMIC_LINK_EVENT_UNSPECIFIED",
    Click = "CLICK",
    Redirect = "REDIRECT",
    AppInstall = "APP_INSTALL",
    AppFirstOpen = "APP_FIRST_OPEN",
    AppReOpen = "APP_RE_OPEN"
}
/**
 * Requested platform.
 */
export declare enum DynamicLinkEventStatPlatformEnum {
    DynamicLinkPlatformUnspecified = "DYNAMIC_LINK_PLATFORM_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    Desktop = "DESKTOP",
    Other = "OTHER"
}
/**
 * Dynamic Link event stat.
 */
export declare class DynamicLinkEventStat extends SpeakeasyBase {
    /**
     * The number of times this event occurred.
     */
    count?: string;
    /**
     * Link event.
     */
    event?: DynamicLinkEventStatEventEnum;
    /**
     * Requested platform.
     */
    platform?: DynamicLinkEventStatPlatformEnum;
}
