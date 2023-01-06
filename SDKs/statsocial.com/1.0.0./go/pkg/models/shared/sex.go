package shared

type Sex struct {
	Female *Female `json:"Female,omitempty"`
	Male   *Male   `json:"Male,omitempty"`
}
