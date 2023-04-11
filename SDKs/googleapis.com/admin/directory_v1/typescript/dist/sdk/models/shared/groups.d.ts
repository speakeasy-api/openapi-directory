import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * Successful response
 */
export declare class Groups extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * A list of group objects.
     */
    groups?: Group[];
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string;
}
