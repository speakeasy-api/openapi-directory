import { SpeakeasyBase } from "../../../internal/utils";
/**
 * URL item.
 */
export declare class Link extends SpeakeasyBase {
    /**
     * URL of a thumbnail image of the target URL. Read-only.
     */
    thumbnailUrl?: string;
    /**
     * Title of the target of the URL. Read-only.
     */
    title?: string;
    /**
     * URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters.
     */
    url?: string;
}
