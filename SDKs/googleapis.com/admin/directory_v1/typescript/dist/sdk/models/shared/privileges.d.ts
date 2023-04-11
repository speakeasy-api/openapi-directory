import { SpeakeasyBase } from "../../../internal/utils";
import { Privilege } from "./privilege";
/**
 * Successful response
 */
export declare class Privileges extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * A list of Privilege resources.
     */
    items?: Privilege[];
    /**
     * The type of the API resource. This is always `admin#directory#privileges`.
     */
    kind?: string;
}
