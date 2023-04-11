import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Click-through URL
 */
export declare class CreativeClickThroughUrl extends SpeakeasyBase {
    /**
     * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field.
     */
    computedClickThroughUrl?: string;
    /**
     * Custom click-through URL. Applicable if the landingPageId field is left unset.
     */
    customClickThroughUrl?: string;
    /**
     * ID of the landing page for the click-through URL.
     */
    landingPageId?: string;
}
