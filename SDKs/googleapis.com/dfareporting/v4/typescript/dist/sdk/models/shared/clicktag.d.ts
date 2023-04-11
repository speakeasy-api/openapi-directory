import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
/**
 * Creative Click Tag.
 */
export declare class ClickTag extends SpeakeasyBase {
    /**
     * Click-through URL
     */
    clickThroughUrl?: CreativeClickThroughUrl;
    /**
     * Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    eventName?: string;
    /**
     * Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field.
     */
    name?: string;
}
