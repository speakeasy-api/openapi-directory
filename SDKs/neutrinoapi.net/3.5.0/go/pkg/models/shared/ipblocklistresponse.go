package shared

type IPBlocklistResponse struct {
	Blocklists   []string `json:"blocklists"`
	IP           string   `json:"ip"`
	IsBot        bool     `json:"isBot"`
	IsDshield    bool     `json:"isDshield"`
	IsExploitBot bool     `json:"isExploitBot"`
	IsHijacked   bool     `json:"isHijacked"`
	IsListed     bool     `json:"isListed"`
	IsMalware    bool     `json:"isMalware"`
	IsProxy      bool     `json:"isProxy"`
	IsSpamBot    bool     `json:"isSpamBot"`
	IsSpider     bool     `json:"isSpider"`
	IsSpyware    bool     `json:"isSpyware"`
	IsTor        bool     `json:"isTor"`
	IsVpn        bool     `json:"isVpn"`
	LastSeen     int32    `json:"lastSeen"`
	ListCount    int32    `json:"listCount"`
	Sensors      []string `json:"sensors"`
}
