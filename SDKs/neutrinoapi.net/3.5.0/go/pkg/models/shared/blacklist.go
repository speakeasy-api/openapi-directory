package shared

type Blacklist struct {
	IsListed     bool   `json:"isListed"`
	ListHost     string `json:"listHost"`
	ListName     string `json:"listName"`
	ListRating   int32  `json:"listRating"`
	ResponseTime int32  `json:"responseTime"`
	ReturnCode   string `json:"returnCode"`
	TxtRecord    string `json:"txtRecord"`
}
