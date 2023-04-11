import { SpeakeasyBase } from "../../../internal/utils";
import { Domains } from "./domains";
/**
 * Successful response
 */
export declare class Domains2 extends SpeakeasyBase {
    /**
     * A list of domain objects.
     */
    domains?: Domains[];
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
}
