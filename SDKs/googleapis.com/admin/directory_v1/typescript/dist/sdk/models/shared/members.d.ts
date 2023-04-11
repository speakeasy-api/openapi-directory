import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
/**
 * Successful response
 */
export declare class Members extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * A list of member objects.
     */
    members?: Member[];
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string;
}
