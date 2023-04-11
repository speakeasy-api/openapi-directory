import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a group of customer profiles.
 *
 * @remarks
 *
 * Customer groups can be created, be modified, and have their membership defined using
 * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
 */
export declare class CustomerGroup extends SpeakeasyBase {
    /**
     * The timestamp when the customer group was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * A unique Square-generated ID for the customer group.
     */
    id?: string;
    /**
     * The name of the customer group.
     */
    name: string;
    /**
     * The timestamp when the customer group was last updated, in RFC 3339 format.
     */
    updatedAt?: string;
}
