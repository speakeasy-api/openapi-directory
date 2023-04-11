import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of call-to-action, a message to the user indicating action that can be taken.
 */
export declare enum ActivityContentDetailsPromotedItemCtaTypeEnum {
    CtaTypeUnspecified = "ctaTypeUnspecified",
    VisitAdvertiserSite = "visitAdvertiserSite"
}
/**
 * Details about a resource which is being promoted.
 */
export declare class ActivityContentDetailsPromotedItem extends SpeakeasyBase {
    /**
     * The URL the client should fetch to request a promoted item.
     */
    adTag?: string;
    /**
     * The URL the client should ping to indicate that the user clicked through on this promoted item.
     */
    clickTrackingUrl?: string;
    /**
     * The URL the client should ping to indicate that the user was shown this promoted item.
     */
    creativeViewUrl?: string;
    /**
     * The type of call-to-action, a message to the user indicating action that can be taken.
     */
    ctaType?: ActivityContentDetailsPromotedItemCtaTypeEnum;
    /**
     * The custom call-to-action button text. If specified, it will override the default button text for the cta_type.
     */
    customCtaButtonText?: string;
    /**
     * The text description to accompany the promoted item.
     */
    descriptionText?: string;
    /**
     * The URL the client should direct the user to, if the user chooses to visit the advertiser's website.
     */
    destinationUrl?: string;
    /**
     * The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown.
     */
    forecastingUrl?: string[];
    /**
     * The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.
     */
    impressionUrl?: string[];
    /**
     * The ID that YouTube uses to uniquely identify the promoted video.
     */
    videoId?: string;
}
