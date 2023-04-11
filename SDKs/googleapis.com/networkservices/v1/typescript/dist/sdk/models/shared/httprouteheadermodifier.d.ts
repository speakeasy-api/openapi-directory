import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specification for modifying HTTP header in HTTP request and HTTP response.
 */
export declare class HttpRouteHeaderModifier extends SpeakeasyBase {
    /**
     * Add the headers with given map where key is the name of the header, value is the value of the header.
     */
    add?: Record<string, string>;
    /**
     * Remove headers (matching by header names) specified in the list.
     */
    remove?: string[];
    /**
     * Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.
     */
    set?: Record<string, string>;
}
