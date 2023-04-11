import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkWarning } from "./dynamiclinkwarning";
/**
 * Response to create a short Dynamic Link.
 */
export declare class CreateShortDynamicLinkResponse extends SpeakeasyBase {
    /**
     * Preview link to show the link flow chart. (debug info.)
     */
    previewLink?: string;
    /**
     * Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz
     */
    shortLink?: string;
    /**
     * Information about potential warnings on link creation.
     */
    warning?: DynamicLinkWarning[];
}
