import { SpeakeasyBase } from "../../../internal/utils";
import { Brand } from "./brand";
/**
 * Response message for BrandService.ListBrands.
 */
export declare class ListBrandsResponse extends SpeakeasyBase {
    /**
     * A list of all brands associated with the Hotel Center account being queried.
     */
    brands?: Brand[];
}
