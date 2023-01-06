package shared

type HlRrequestGetHlrEnum string

const (
	HLRrequestGetHLREnumOne HlRrequestGetHlrEnum = "1"
)

type HlRrequest struct {
	GetHLR HlRrequestGetHlrEnum `json:"getHLR"`
	Keyid  string               `json:"keyid"`
	Num    []string             `json:"num"`
}
