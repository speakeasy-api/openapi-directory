import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Successful response
 */
export declare class Users extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string;
    /**
     * Event that triggered this response (only used in case of Push Response)
     */
    triggerEvent?: string;
    /**
     * A list of user objects.
     */
    users?: User[];
}
