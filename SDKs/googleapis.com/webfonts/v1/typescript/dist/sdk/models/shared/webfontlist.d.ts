import { SpeakeasyBase } from "../../../internal/utils";
import { Webfont } from "./webfont";
/**
 * Response containing the list of fonts currently served by the Google Fonts API.
 */
export declare class WebfontList extends SpeakeasyBase {
    /**
     * The list of fonts currently served by the Google Fonts API.
     */
    items?: Webfont[];
    /**
     * This kind represents a list of webfont objects in the webfonts service.
     */
    kind?: string;
}
