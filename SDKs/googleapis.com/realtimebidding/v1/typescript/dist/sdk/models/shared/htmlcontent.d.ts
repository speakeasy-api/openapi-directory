import { SpeakeasyBase } from "../../../internal/utils";
/**
 * HTML content for a creative.
 */
export declare class HtmlContent extends SpeakeasyBase {
    /**
     * The height of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method.
     */
    height?: number;
    /**
     * The HTML snippet that displays the ad when inserted in the web page.
     */
    snippet?: string;
    /**
     * The width of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method.
     */
    width?: number;
}
