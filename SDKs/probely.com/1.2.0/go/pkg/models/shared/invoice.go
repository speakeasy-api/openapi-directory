package shared

type InvoiceDiscounts struct {
	Amount      *int64  `json:"amount,omitempty"`
	Description *string `json:"description,omitempty"`
}

type InvoiceLineItems struct {
	Amount         *int64  `json:"amount,omitempty"`
	Description    *string `json:"description,omitempty"`
	DiscountAmount *int64  `json:"discount_amount,omitempty"`
	Quantity       *int64  `json:"quantity,omitempty"`
	TaxAmount      *int64  `json:"tax_amount,omitempty"`
	UnitAmount     *int64  `json:"unit_amount,omitempty"`
}

type InvoiceTaxes struct {
	TaxAmount *int64   `json:"tax_amount,omitempty"`
	TaxName   *string  `json:"tax_name,omitempty"`
	TaxRate   *float32 `json:"tax_rate,omitempty"`
}

type Invoice struct {
	AmountDue    *int64             `json:"amount_due,omitempty"`
	AmountPaid   *int64             `json:"amount_paid,omitempty"`
	CurrencyCode *string            `json:"currency_code,omitempty"`
	Discounts    []InvoiceDiscounts `json:"discounts,omitempty"`
	LineItems    []InvoiceLineItems `json:"line_items,omitempty"`
	Plan         *string            `json:"plan,omitempty"`
	PlanID       *string            `json:"plan_id,omitempty"`
	SubTotal     *int64             `json:"sub_total,omitempty"`
	Taxes        []InvoiceTaxes     `json:"taxes,omitempty"`
	Total        *int64             `json:"total,omitempty"`
}
