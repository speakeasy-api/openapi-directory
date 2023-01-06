package shared

// ConnectAmazonBuyShippingRequestBody
// An Amazon account information request body
type ConnectAmazonBuyShippingRequestBody struct {
	Email            string `json:"email"`
	MerchantSellerID string `json:"merchant_seller_id"`
	MwsAuthToken     string `json:"mws_auth_token"`
	Nickname         string `json:"nickname"`
}
