import { SpeakeasyBase } from "../../../internal/utils";
import { Brand } from "./brand";
/**
 * Response message for ListBrands.
 */
export declare class ListBrandsResponse extends SpeakeasyBase {
    /**
     * Brands existing in the project.
     */
    brands?: Brand[];
}
