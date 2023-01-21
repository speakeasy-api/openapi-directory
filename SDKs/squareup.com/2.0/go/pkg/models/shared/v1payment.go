package shared

// V1Payment
// A payment represents a paid transaction between a Square merchant and a
// customer. Payment details are usually available from Connect API endpoints
// within a few minutes after the transaction completes.
//
// Each Payment object includes several fields that end in `_money`. These fields
// describe the various amounts of money that contribute to the payment total:
//
// <ul>
// <li>
// Monetary values are <b>positive</b> if they represent an
// <em>increase</em> in the amount of money the merchant receives (e.g.,
// <code>tax_money</code>, <code>tip_money</code>).
// </li>
// <li>
// Monetary values are <b>negative</b> if they represent an
// <em>decrease</em> in the amount of money the merchant receives (e.g.,
// <code>discount_money</code>, <code>refunded_money</code>).
// </li>
// </ul>
type V1Payment struct {
	AdditiveTax          []V1PaymentTax         `json:"additive_tax,omitempty"`
	AdditiveTaxMoney     *V1Money               `json:"additive_tax_money,omitempty"`
	CreatedAt            *string                `json:"created_at,omitempty"`
	CreatorID            *string                `json:"creator_id,omitempty"`
	Device               *Device                `json:"device,omitempty"`
	DiscountMoney        *V1Money               `json:"discount_money,omitempty"`
	GrossSalesMoney      *V1Money               `json:"gross_sales_money,omitempty"`
	ID                   *string                `json:"id,omitempty"`
	InclusiveTax         []V1PaymentTax         `json:"inclusive_tax,omitempty"`
	InclusiveTaxMoney    *V1Money               `json:"inclusive_tax_money,omitempty"`
	IsPartial            *bool                  `json:"is_partial,omitempty"`
	Itemizations         []V1PaymentItemization `json:"itemizations,omitempty"`
	MerchantID           *string                `json:"merchant_id,omitempty"`
	NetSalesMoney        *V1Money               `json:"net_sales_money,omitempty"`
	NetTotalMoney        *V1Money               `json:"net_total_money,omitempty"`
	PaymentURL           *string                `json:"payment_url,omitempty"`
	ProcessingFeeMoney   *V1Money               `json:"processing_fee_money,omitempty"`
	ReceiptURL           *string                `json:"receipt_url,omitempty"`
	RefundedMoney        *V1Money               `json:"refunded_money,omitempty"`
	Refunds              []V1Refund             `json:"refunds,omitempty"`
	SurchargeMoney       *V1Money               `json:"surcharge_money,omitempty"`
	Surcharges           []V1PaymentSurcharge   `json:"surcharges,omitempty"`
	SwedishRoundingMoney *V1Money               `json:"swedish_rounding_money,omitempty"`
	TaxMoney             *V1Money               `json:"tax_money,omitempty"`
	Tender               []V1Tender             `json:"tender,omitempty"`
	TipMoney             *V1Money               `json:"tip_money,omitempty"`
	TotalCollectedMoney  *V1Money               `json:"total_collected_money,omitempty"`
}
