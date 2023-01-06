package shared

type BrowserBotResponse struct {
	Content           string            `json:"content"`
	Elements          []string          `json:"elements"`
	ErrorMessage      string            `json:"errorMessage"`
	ExecResults       []string          `json:"execResults"`
	HTTPRedirectURL   string            `json:"httpRedirectUrl"`
	HTTPStatusCode    int32             `json:"httpStatusCode"`
	HTTPStatusMessage string            `json:"httpStatusMessage"`
	IsError           bool              `json:"isError"`
	IsHTTPOk          bool              `json:"isHttpOk"`
	IsHTTPRedirect    bool              `json:"isHttpRedirect"`
	IsSecure          bool              `json:"isSecure"`
	IsTimeout         bool              `json:"isTimeout"`
	LanguageCode      string            `json:"languageCode"`
	LoadTime          float64           `json:"loadTime"`
	MimeType          string            `json:"mimeType"`
	ResponseHeaders   map[string]string `json:"responseHeaders"`
	SecurityDetails   map[string]string `json:"securityDetails"`
	ServerIP          string            `json:"serverIp"`
	Title             string            `json:"title"`
	URL               string            `json:"url"`
}
