package shared

// CustomerFilter
// Represents a set of `CustomerQuery` filters used to limit the set of
// customers returned by the [SearchCustomers](https://developer.squareup.com/reference/square_2021-08-18/customers-api/search-customers) endpoint.
type CustomerFilter struct {
	CreatedAt      *TimeRange                    `json:"created_at,omitempty"`
	CreationSource *CustomerCreationSourceFilter `json:"creation_source,omitempty"`
	EmailAddress   *CustomerTextFilter           `json:"email_address,omitempty"`
	GroupIds       *FilterValue                  `json:"group_ids,omitempty"`
	PhoneNumber    *CustomerTextFilter           `json:"phone_number,omitempty"`
	ReferenceID    *CustomerTextFilter           `json:"reference_id,omitempty"`
	UpdatedAt      *TimeRange                    `json:"updated_at,omitempty"`
}
