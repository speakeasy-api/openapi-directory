import { SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";
/**
 * Response listing all localized listings.
 */
export declare class ListingsListResponse extends SpeakeasyBase {
    /**
     * The kind of this response ("androidpublisher#listingsListResponse").
     */
    kind?: string;
    /**
     * All localized listings.
     */
    listings?: Listing[];
}
