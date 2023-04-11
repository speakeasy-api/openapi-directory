import { SpeakeasyBase } from "../../../internal/utils";
import { Platform } from "./platform";
/**
 * Response message for ListPlatforms.
 */
export declare class ListPlatformsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of platforms.
     */
    platforms?: Platform[];
}
