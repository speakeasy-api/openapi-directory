package shared

// V1PaymentItemization
// Payment include an` itemizations` field that lists the items purchased,
// along with associated fees, modifiers, and discounts. Each itemization has an
// `itemization_type` field that indicates which of the following the itemization
// represents:
//
// <ul>
// <li>An item variation from the merchant's item library</li>
// <li>A custom monetary amount</li>
// <li>
// An action performed on a Square gift card, such as activating or
// reloading it.
// </li>
// </ul>
//
// *Note**: itemization information included in a `Payment` object reflects
// details collected **at the time of the payment**. Details such as the name or
// price of items might have changed since the payment was processed.
type V1PaymentItemization struct {
	DiscountMoney       *V1Money             `json:"discount_money,omitempty"`
	Discounts           []V1PaymentDiscount  `json:"discounts,omitempty"`
	GrossSalesMoney     *V1Money             `json:"gross_sales_money,omitempty"`
	ItemDetail          *V1PaymentItemDetail `json:"item_detail,omitempty"`
	ItemVariationName   *string              `json:"item_variation_name,omitempty"`
	ItemizationType     *string              `json:"itemization_type,omitempty"`
	Modifiers           []V1PaymentModifier  `json:"modifiers,omitempty"`
	Name                *string              `json:"name,omitempty"`
	NetSalesMoney       *V1Money             `json:"net_sales_money,omitempty"`
	Notes               *string              `json:"notes,omitempty"`
	Quantity            *float64             `json:"quantity,omitempty"`
	SingleQuantityMoney *V1Money             `json:"single_quantity_money,omitempty"`
	Taxes               []V1PaymentTax       `json:"taxes,omitempty"`
	TotalMoney          *V1Money             `json:"total_money,omitempty"`
}
