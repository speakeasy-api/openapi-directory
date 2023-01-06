package shared

type HostReputationResponse struct {
	Host      string      `json:"host"`
	IsListed  bool        `json:"isListed"`
	ListCount int32       `json:"listCount"`
	Lists     []Blacklist `json:"lists"`
}
