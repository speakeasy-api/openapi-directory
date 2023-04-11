import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the client forgets about a link after opening it, or observes it until the window closes. Not supported by Chat apps.
 */
export declare enum GoogleAppsCardV1OpenLinkOnCloseEnum {
    Nothing = "NOTHING",
    Reload = "RELOAD"
}
/**
 * How to open a link. Not supported by Chat apps.
 */
export declare enum GoogleAppsCardV1OpenLinkOpenAsEnum {
    FullSize = "FULL_SIZE",
    Overlay = "OVERLAY"
}
/**
 * Represents an `onClick` event that opens a hyperlink.
 */
export declare class GoogleAppsCardV1OpenLink extends SpeakeasyBase {
    /**
     * Whether the client forgets about a link after opening it, or observes it until the window closes. Not supported by Chat apps.
     */
    onClose?: GoogleAppsCardV1OpenLinkOnCloseEnum;
    /**
     * How to open a link. Not supported by Chat apps.
     */
    openAs?: GoogleAppsCardV1OpenLinkOpenAsEnum;
    /**
     * The URL to open.
     */
    url?: string;
}
