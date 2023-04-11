import { SpeakeasyBase } from "../../../internal/utils";
import { ApiVersion } from "./apiversion";
/**
 * Response message for ListApiVersions.
 */
export declare class ListApiVersionsResponse extends SpeakeasyBase {
    /**
     * The versions from the specified publisher.
     */
    apiVersions?: ApiVersion[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
