package shared

// Requisition
// RequisitionSerializer.
type Requisition struct {
	Accounts     []string               `json:"accounts,omitempty"`
	Agreements   []string               `json:"agreements,omitempty"`
	EnduserID    string                 `json:"enduser_id"`
	ID           *string                `json:"id,omitempty"`
	Redirect     string                 `json:"redirect"`
	Reference    string                 `json:"reference"`
	Status       map[string]interface{} `json:"status,omitempty"`
	UserLanguage *string                `json:"user_language,omitempty"`
}

// RequisitionInput
// RequisitionSerializer.
type RequisitionInput struct {
	Agreements   []string `json:"agreements,omitempty" form:"name=agreements" multipartForm:"name=agreements,json"`
	EnduserID    string   `json:"enduser_id" form:"name=enduser_id" multipartForm:"name=enduser_id"`
	Redirect     string   `json:"redirect" form:"name=redirect" multipartForm:"name=redirect"`
	Reference    string   `json:"reference" form:"name=reference" multipartForm:"name=reference"`
	UserLanguage *string  `json:"user_language,omitempty" form:"name=user_language" multipartForm:"name=user_language"`
}
