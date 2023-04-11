import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents details collected when the visitor views a page.
 */
export declare class PageviewData extends SpeakeasyBase {
    /**
     * The URL of the page that the visitor viewed.
     */
    pagePath?: string;
    /**
     * The title of the page that the visitor viewed.
     */
    pageTitle?: string;
}
