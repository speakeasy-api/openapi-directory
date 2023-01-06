package shared

// ConnectDhlEcommerceRequestBody
// A DHL Ecommerce account information request body
type ConnectDhlEcommerceRequestBody struct {
	AccountNumber        *string                          `json:"account_number,omitempty"`
	AncillaryEndorsement *AncillaryServiceEndorsementEnum `json:"ancillary_endorsement,omitempty"`
	APIKey               *string                          `json:"api_key,omitempty"`
	APISecret            *string                          `json:"api_secret,omitempty"`
	ClientID             string                           `json:"client_id"`
	DistributionCenter   string                           `json:"distribution_center"`
	FtpPassword          *string                          `json:"ftp_password,omitempty"`
	FtpUsername          *string                          `json:"ftp_username,omitempty"`
	Nickname             string                           `json:"nickname"`
	Password             string                           `json:"password"`
	PickupNumber         string                           `json:"pickup_number"`
	Username             string                           `json:"username"`
}
