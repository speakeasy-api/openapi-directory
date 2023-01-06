package shared

type LicenseVideoSizeEnum string

const (
	LicenseVideoSizeEnumWeb   LicenseVideoSizeEnum = "web"
	LicenseVideoSizeEnumSd    LicenseVideoSizeEnum = "sd"
	LicenseVideoSizeEnumHd    LicenseVideoSizeEnum = "hd"
	LicenseVideoSizeEnumFourk LicenseVideoSizeEnum = "4k"
)

// LicenseVideo
// Data required to license a video
type LicenseVideo struct {
	AuthCookie               *Cookie                `json:"auth_cookie,omitempty"`
	EditorialAcknowledgement *bool                  `json:"editorial_acknowledgement,omitempty"`
	Metadata                 map[string]interface{} `json:"metadata,omitempty"`
	Price                    *float64               `json:"price,omitempty"`
	SearchID                 *string                `json:"search_id,omitempty"`
	ShowModal                *bool                  `json:"show_modal,omitempty"`
	Size                     *LicenseVideoSizeEnum  `json:"size,omitempty"`
	SubscriptionID           *string                `json:"subscription_id,omitempty"`
	VideoID                  string                 `json:"video_id"`
}
