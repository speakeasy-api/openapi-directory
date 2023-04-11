import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderProductTax extends SpeakeasyBase {
    /**
     * False if rate is a percentage and true if rate is monetary
     */
    fixed?: boolean;
    /**
     * Unique identifier of the Order Product Tax
     */
    id?: number;
    /**
     * Name of the category that the tax is associated with or the tax name
     */
    name?: string;
    /**
     * Tax rate
     */
    rate?: number;
    /**
     * False if tax is not included on product price
     */
    taxOnProductPrice?: boolean;
}
