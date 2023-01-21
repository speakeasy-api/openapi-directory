package shared

// CreateCheckoutRequest
// Defines the parameters that can be included in the body of
// a request to the `CreateCheckout` endpoint.
type CreateCheckoutRequest struct {
	AdditionalRecipients       []ChargeRequestAdditionalRecipient `json:"additional_recipients,omitempty"`
	AskForShippingAddress      *bool                              `json:"ask_for_shipping_address,omitempty"`
	IdempotencyKey             string                             `json:"idempotency_key"`
	MerchantSupportEmail       *string                            `json:"merchant_support_email,omitempty"`
	Note                       *string                            `json:"note,omitempty"`
	Order                      CreateOrderRequest                 `json:"order"`
	PrePopulateBuyerEmail      *string                            `json:"pre_populate_buyer_email,omitempty"`
	PrePopulateShippingAddress *Address                           `json:"pre_populate_shipping_address,omitempty"`
	RedirectURL                *string                            `json:"redirect_url,omitempty"`
}
