import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaxFields extends SpeakeasyBase {
    /**
     * Unique identifier of the category of the Tax
     */
    categoryId?: number;
    /**
     * Country name where the Tax applies
     */
    country?: string;
    /**
     * True if the tax has a fixed valued amount
     */
    fixed?: boolean;
    /**
     * Unique identifier of the Tax
     */
    id?: number;
    /**
     * Name that identifies tax
     */
    name?: string;
    /**
     * Region name where the Tax applies
     */
    region?: string;
    /**
     * True if the tax should be applied to shipping costs
     */
    shipping?: boolean;
    /**
     * Tax value for the given Tax
     */
    taxAmount?: number;
}
