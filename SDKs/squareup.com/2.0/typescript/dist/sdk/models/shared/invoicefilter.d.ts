import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes query filters to apply.
 */
export declare class InvoiceFilter extends SpeakeasyBase {
    /**
     * Limits the search to the specified customers, within the specified locations.
     *
     * @remarks
     * Specifying a customer is optional. In the current implementation,
     * a maximum of one customer can be specified.
     */
    customerIds?: string[];
    /**
     * Limits the search to the specified locations. A location is required.
     *
     * @remarks
     * In the current implementation, only one location can be specified.
     */
    locationIds: string[];
}
