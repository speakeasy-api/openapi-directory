package shared

type UserAgentInfoResponse struct {
	BrowserName            string `json:"browserName"`
	Engine                 string `json:"engine"`
	EngineVersion          string `json:"engineVersion"`
	IsAndroid              bool   `json:"isAndroid"`
	IsIos                  bool   `json:"isIos"`
	IsMobile               bool   `json:"isMobile"`
	MobileBrand            string `json:"mobileBrand"`
	MobileBrowser          string `json:"mobileBrowser"`
	MobileModel            string `json:"mobileModel"`
	MobileScreenHeight     int32  `json:"mobileScreenHeight"`
	MobileScreenWidth      int32  `json:"mobileScreenWidth"`
	OperatingSystem        string `json:"operatingSystem"`
	OperatingSystemFamily  string `json:"operatingSystemFamily"`
	OperatingSystemVersion string `json:"operatingSystemVersion"`
	Producer               string `json:"producer"`
	Type                   string `json:"type"`
	Version                string `json:"version"`
}
