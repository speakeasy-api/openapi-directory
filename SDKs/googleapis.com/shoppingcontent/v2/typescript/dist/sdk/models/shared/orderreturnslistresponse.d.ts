import { SpeakeasyBase } from "../../../internal/utils";
import { MerchantOrderReturn } from "./merchantorderreturn";
/**
 * Successful response
 */
export declare class OrderreturnsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsListResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of returns.
     */
    nextPageToken?: string;
    resources?: MerchantOrderReturn[];
}
