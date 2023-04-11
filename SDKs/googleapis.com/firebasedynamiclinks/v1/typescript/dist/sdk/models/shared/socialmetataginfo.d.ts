import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
 */
export declare class SocialMetaTagInfo extends SpeakeasyBase {
    /**
     * A short description of the link. Optional.
     */
    socialDescription?: string;
    /**
     * An image url string. Optional.
     */
    socialImageLink?: string;
    /**
     * Title to be displayed. Optional.
     */
    socialTitle?: string;
}
