import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
/**
 * Successful response
 */
export declare class Roles extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * A list of Role resources.
     */
    items?: Role[];
    /**
     * The type of the API resource. This is always `admin#directory#roles`.
     */
    kind?: string;
    nextPageToken?: string;
}
