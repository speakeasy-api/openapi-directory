import { SpeakeasyBase } from "../../../internal/utils";
import { ProductStatus } from "./productstatus";
/**
 * Successful response
 */
export declare class ProductstatusesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesListResponse`".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of products statuses.
     */
    nextPageToken?: string;
    resources?: ProductStatus[];
}
