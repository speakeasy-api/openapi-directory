import { SpeakeasyBase } from "../../../internal/utils";
import { Token } from "./token";
/**
 * JSON response template for List tokens operation in Directory API.
 */
export declare class Tokens extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * A list of Token resources.
     */
    items?: Token[];
    /**
     * The type of the API resource. This is always `admin#directory#tokenList`.
     */
    kind?: string;
}
