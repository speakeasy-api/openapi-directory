package shared

type Cookies struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
