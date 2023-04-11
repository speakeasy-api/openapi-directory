import { SpeakeasyBase } from "../../../internal/utils";
import { Schema } from "./schema";
/**
 * JSON response template for List Schema operation in Directory API.
 */
export declare class Schemas extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * A list of UserSchema objects.
     */
    schemas?: Schema[];
}
