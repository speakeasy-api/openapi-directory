import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An additional seller-defined and customer-facing field to include on the invoice. For more information,
 *
 * @remarks
 * see [Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).
 *
 * Adding custom fields to an invoice requires an
 * [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
 */
export declare class InvoiceCustomField extends SpeakeasyBase {
    /**
     * The label or title of the custom field. This field is required for a custom field.
     */
    label?: string;
    /**
     * The location of the custom field on the invoice. This field is required for a custom field.
     */
    placement?: string;
    /**
     * The text of the custom field. If omitted, only the label is rendered.
     */
    value?: string;
}
