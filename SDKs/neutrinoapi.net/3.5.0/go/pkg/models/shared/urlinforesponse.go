package shared

type URLInfoResponse struct {
	Content           string            `json:"content"`
	ContentEncoding   string            `json:"contentEncoding"`
	ContentSize       int32             `json:"contentSize"`
	ContentType       string            `json:"contentType"`
	HTTPOk            bool              `json:"httpOk"`
	HTTPRedirect      bool              `json:"httpRedirect"`
	HTTPStatus        int32             `json:"httpStatus"`
	HTTPStatusMessage int32             `json:"httpStatusMessage"`
	IsError           bool              `json:"isError"`
	IsTimeout         bool              `json:"isTimeout"`
	LanguageCode      string            `json:"languageCode"`
	LoadTime          float64           `json:"loadTime"`
	Query             map[string]string `json:"query"`
	Real              bool              `json:"real"`
	ServerCity        string            `json:"serverCity"`
	ServerCountry     string            `json:"serverCountry"`
	ServerCountryCode string            `json:"serverCountryCode"`
	ServerHostname    string            `json:"serverHostname"`
	ServerIP          string            `json:"serverIp"`
	ServerName        string            `json:"serverName"`
	ServerRegion      string            `json:"serverRegion"`
	Title             string            `json:"title"`
	URL               string            `json:"url"`
	URLPath           string            `json:"urlPath"`
	URLPort           int32             `json:"urlPort"`
	URLProtocol       string            `json:"urlProtocol"`
	Valid             bool              `json:"valid"`
}
