import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
/**
 * Online Behavioral Advertiser icon.
 */
export declare class ObaIcon extends SpeakeasyBase {
    /**
     * URL to redirect to when an OBA icon is clicked.
     */
    iconClickThroughUrl?: string;
    /**
     * URL to track click when an OBA icon is clicked.
     */
    iconClickTrackingUrl?: string;
    /**
     * URL to track view when an OBA icon is clicked.
     */
    iconViewTrackingUrl?: string;
    /**
     * Identifies the industry initiative that the icon supports. For example, AdChoices.
     */
    program?: string;
    /**
     * OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more
     */
    resourceUrl?: string;
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    size?: Size;
    /**
     * OBA icon x coordinate position. Accepted values are left or right.
     */
    xPosition?: string;
    /**
     * OBA icon y coordinate position. Accepted values are top or bottom.
     */
    yPosition?: string;
}
