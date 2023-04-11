import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
import { PopupWindowProperties } from "./popupwindowproperties";
/**
 * Type of the event. This is a read-only field.
 */
export declare enum CreativeCustomEventAdvertiserCustomEventTypeEnum {
    AdvertiserEventTimer = "ADVERTISER_EVENT_TIMER",
    AdvertiserEventExit = "ADVERTISER_EVENT_EXIT",
    AdvertiserEventCounter = "ADVERTISER_EVENT_COUNTER"
}
/**
 * Artwork type used by the creative.This is a read-only field.
 */
export declare enum CreativeCustomEventArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH",
    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5",
    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED",
    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}
/**
 * Target type used by the event.
 */
export declare enum CreativeCustomEventTargetTypeEnum {
    TargetBlank = "TARGET_BLANK",
    TargetTop = "TARGET_TOP",
    TargetSelf = "TARGET_SELF",
    TargetParent = "TARGET_PARENT",
    TargetPopup = "TARGET_POPUP"
}
/**
 * Creative Custom Event.
 */
export declare class CreativeCustomEvent extends SpeakeasyBase {
    /**
     * Unique ID of this event used by Reporting and Data Transfer. This is a read-only field.
     */
    advertiserCustomEventId?: string;
    /**
     * User-entered name for the event.
     */
    advertiserCustomEventName?: string;
    /**
     * Type of the event. This is a read-only field.
     */
    advertiserCustomEventType?: CreativeCustomEventAdvertiserCustomEventTypeEnum;
    /**
     * Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion.
     */
    artworkLabel?: string;
    /**
     * Artwork type used by the creative.This is a read-only field.
     */
    artworkType?: CreativeCustomEventArtworkTypeEnum;
    /**
     * Click-through URL
     */
    exitClickThroughUrl?: CreativeClickThroughUrl;
    /**
     * ID of this event. This is a required field and should not be modified after insertion.
     */
    id?: string;
    /**
     * Popup Window Properties.
     */
    popupWindowProperties?: PopupWindowProperties;
    /**
     * Target type used by the event.
     */
    targetType?: CreativeCustomEventTargetTypeEnum;
    /**
     * Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.
     */
    videoReportingId?: string;
}
