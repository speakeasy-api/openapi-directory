import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies the sort field and sort order.
 */
export declare class InvoiceSort extends SpeakeasyBase {
    /**
     * The field to use for sorting.
     */
    field: string;
    /**
     * The order to use for sorting the results.
     */
    order?: string;
}
