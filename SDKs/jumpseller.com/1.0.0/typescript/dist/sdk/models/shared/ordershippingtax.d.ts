import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderShippingTax extends SpeakeasyBase {
    /**
     * Code of the associated country
     */
    country?: string;
    /**
     * False if rate is a percentage and true if rate is monetary
     */
    fixed?: boolean;
    /**
     * Unique identifier of the Order Shipping Tax
     */
    id?: number;
    /**
     * Tax name
     */
    name?: string;
    /**
     * Tax rate
     */
    rate?: number;
    /**
     * Code of the associated region
     */
    region?: string;
    /**
     * False if shipping tax is not included on shipping price
     */
    taxOnShippingPrice?: boolean;
}
