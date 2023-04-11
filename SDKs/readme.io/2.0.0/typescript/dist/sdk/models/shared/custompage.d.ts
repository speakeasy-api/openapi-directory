import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CustomPage object
 */
export declare class CustomPage extends SpeakeasyBase {
    /**
     * Body formatted in Markdown (displayed by default).
     */
    body?: string;
    /**
     * Visibility of the custom page
     */
    hidden?: boolean;
    /**
     * Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).
     */
    html?: string;
    /**
     * **true** if `html` should be displayed, **false** if `body` should be displayed.
     */
    htmlmode?: boolean;
    /**
     * Title of the custom page
     */
    title: string;
}
