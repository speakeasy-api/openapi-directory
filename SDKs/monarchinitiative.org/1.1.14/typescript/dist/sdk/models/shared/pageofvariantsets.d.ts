import { SpeakeasyBase } from "../../../internal/utils";
import { VariantSet } from "./variantset";
/**
 * Success
 */
export declare class PageOfVariantSets extends SpeakeasyBase {
    items?: VariantSet[];
    /**
     * Number of this page of results
     */
    page?: number;
    /**
     * Total number of pages of results
     */
    pages?: number;
    /**
     * Number of items per page of results
     */
    perPage?: number;
    /**
     * Total number of results
     */
    total?: number;
}
