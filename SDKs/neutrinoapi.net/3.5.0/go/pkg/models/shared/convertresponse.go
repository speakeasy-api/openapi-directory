package shared

type ConvertResponse struct {
	FromType    string  `json:"fromType"`
	FromValue   string  `json:"fromValue"`
	Result      string  `json:"result"`
	ResultFloat float64 `json:"resultFloat"`
	ToType      string  `json:"toType"`
	Valid       bool    `json:"valid"`
}
