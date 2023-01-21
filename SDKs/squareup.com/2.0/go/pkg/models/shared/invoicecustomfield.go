package shared

// InvoiceCustomField
// An additional seller-defined and customer-facing field to include on the invoice. For more information,
// see [Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).
//
// Adding custom fields to an invoice requires an
// [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
type InvoiceCustomField struct {
	Label     *string `json:"label,omitempty"`
	Placement *string `json:"placement,omitempty"`
	Value     *string `json:"value,omitempty"`
}
