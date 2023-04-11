import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a group of customer profiles that match one or more predefined filter criteria.
 *
 * @remarks
 *
 * Segments (also known as Smart Groups) are defined and created within the Customer Directory in the
 * Square Seller Dashboard or Point of Sale.
 */
export declare class CustomerSegment extends SpeakeasyBase {
    /**
     * The timestamp when the segment was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * A unique Square-generated ID for the segment.
     */
    id?: string;
    /**
     * The name of the segment.
     */
    name: string;
    /**
     * The timestamp when the segment was last updated, in RFC 3339 format.
     */
    updatedAt?: string;
}
