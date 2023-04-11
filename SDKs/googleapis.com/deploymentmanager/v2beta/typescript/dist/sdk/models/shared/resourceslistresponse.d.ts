import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
 */
export declare class ResourcesListResponse extends SpeakeasyBase {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string;
    /**
     * Resources contained in this list response.
     */
    resources?: Resource[];
}
