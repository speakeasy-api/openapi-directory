import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceFilter } from "./invoicefilter";
import { InvoiceSort } from "./invoicesort";
/**
 * Describes query criteria for searching invoices.
 */
export declare class InvoiceQuery extends SpeakeasyBase {
    /**
     * Describes query filters to apply.
     */
    filter: InvoiceFilter;
    /**
     * Identifies the sort field and sort order.
     */
    sort?: InvoiceSort;
}
