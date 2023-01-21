package shared

// Error
// Represents an error encountered during a request to the Connect API.
//
// See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.
type Error struct {
	Category string  `json:"category"`
	Code     string  `json:"code"`
	Detail   *string `json:"detail,omitempty"`
	Field    *string `json:"field,omitempty"`
}
