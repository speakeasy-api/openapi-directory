import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * The position of the OBA icon on the creative.
 */
export declare enum ObaIconPositionEnum {
    ObaIconPositionUnspecified = "OBA_ICON_POSITION_UNSPECIFIED",
    ObaIconPositionUpperRight = "OBA_ICON_POSITION_UPPER_RIGHT",
    ObaIconPositionUpperLeft = "OBA_ICON_POSITION_UPPER_LEFT",
    ObaIconPositionLowerRight = "OBA_ICON_POSITION_LOWER_RIGHT",
    ObaIconPositionLowerLeft = "OBA_ICON_POSITION_LOWER_LEFT"
}
/**
 * OBA Icon for a Creative
 */
export declare class ObaIcon extends SpeakeasyBase {
    /**
     * Required. The click tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com
     */
    clickTrackingUrl?: string;
    /**
     * Dimensions.
     */
    dimensions?: Dimensions;
    /**
     * Required. The landing page URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com
     */
    landingPageUrl?: string;
    /**
     * The position of the OBA icon on the creative.
     */
    position?: ObaIconPositionEnum;
    /**
     * The program of the OBA icon. For example: “AdChoices”.
     */
    program?: string;
    /**
     * The MIME type of the OBA icon resource.
     */
    resourceMimeType?: string;
    /**
     * The URL of the OBA icon resource.
     */
    resourceUrl?: string;
    /**
     * Required. The view tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com
     */
    viewTrackingUrl?: string;
}
