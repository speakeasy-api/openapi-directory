import { SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";
/**
 * Successful response
 */
export declare class ListingsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#listingsListResponse".
     */
    kind?: string;
    listings?: Listing[];
}
