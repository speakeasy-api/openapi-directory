package shared

type AccessTokenDetailsRealmEnum string

const (
	AccessTokenDetailsRealmEnumCustomer    AccessTokenDetailsRealmEnum = "customer"
	AccessTokenDetailsRealmEnumContributor AccessTokenDetailsRealmEnum = "contributor"
)

// AccessTokenDetails
// Access token details that are currently associated with this user
type AccessTokenDetails struct {
	ClientID       *string                      `json:"client_id,omitempty"`
	ContributorID  *string                      `json:"contributor_id,omitempty"`
	CustomerID     *string                      `json:"customer_id,omitempty"`
	ExpiresIn      *int64                       `json:"expires_in,omitempty"`
	OrganizationID *string                      `json:"organization_id,omitempty"`
	Realm          *AccessTokenDetailsRealmEnum `json:"realm,omitempty"`
	Scopes         []string                     `json:"scopes,omitempty"`
	UserID         *string                      `json:"user_id,omitempty"`
	Username       *string                      `json:"username,omitempty"`
}
