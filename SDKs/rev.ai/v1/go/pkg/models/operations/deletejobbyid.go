package operations

type DeleteJobByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

// DeleteJobByID404ApplicationProblemPlusJSON
// Problem details object returned on errors
type DeleteJobByID404ApplicationProblemPlusJSON struct {
	Status *int64  `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}

// DeleteJobByID409ApplicationProblemPlusJSON
// Problem details object returned on errors
type DeleteJobByID409ApplicationProblemPlusJSON struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	CurrentValue  *string  `json:"current_value,omitempty"`
	Detail        *string  `json:"detail,omitempty"`
	Status        *int64   `json:"status,omitempty"`
	Title         *string  `json:"title,omitempty"`
	Type          *string  `json:"type,omitempty"`
}

type DeleteJobByIDRequest struct {
	PathParams DeleteJobByIDPathParams
}

type DeleteJobByIDResponse struct {
	ContentType                                      string
	DeleteJobByID401ApplicationProblemPlusJSONAny    *interface{}
	DeleteJobByID404ApplicationProblemPlusJSONObject *DeleteJobByID404ApplicationProblemPlusJSON
	DeleteJobByID409ApplicationProblemPlusJSONObject *DeleteJobByID409ApplicationProblemPlusJSON
	StatusCode                                       int64
}
