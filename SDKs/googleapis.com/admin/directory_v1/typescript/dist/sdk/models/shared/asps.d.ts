import { SpeakeasyBase } from "../../../internal/utils";
import { Asp } from "./asp";
/**
 * Successful response
 */
export declare class Asps extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * A list of ASP resources.
     */
    items?: Asp[];
    /**
     * The type of the API resource. This is always `admin#directory#aspList`.
     */
    kind?: string;
}
