// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// PartnerCustomerOAuthInstitutionsGetRequest - Request schema for `/partner/customer/oauth_institutions/get`.
type PartnerCustomerOAuthInstitutionsGetRequest struct {
	// Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
	ClientID            *string `json:"client_id,omitempty"`
	EndCustomerClientID string  `json:"end_customer_client_id"`
	// Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
	Secret *string `json:"secret,omitempty"`
}
