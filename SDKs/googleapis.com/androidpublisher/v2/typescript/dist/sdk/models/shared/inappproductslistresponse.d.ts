import { SpeakeasyBase } from "../../../internal/utils";
import { InAppProduct } from "./inappproduct";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";
/**
 * Successful response
 */
export declare class InappproductsListResponse extends SpeakeasyBase {
    inappproduct?: InAppProduct[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsListResponse".
     */
    kind?: string;
    pageInfo?: PageInfo;
    tokenPagination?: TokenPagination;
}
