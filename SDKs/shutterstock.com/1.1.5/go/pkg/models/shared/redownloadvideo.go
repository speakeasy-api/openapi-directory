package shared

type RedownloadVideoSizeEnum string

const (
	RedownloadVideoSizeEnumWeb   RedownloadVideoSizeEnum = "web"
	RedownloadVideoSizeEnumSd    RedownloadVideoSizeEnum = "sd"
	RedownloadVideoSizeEnumHd    RedownloadVideoSizeEnum = "hd"
	RedownloadVideoSizeEnumFourk RedownloadVideoSizeEnum = "4k"
)

// RedownloadVideo
// Data required to redownload a video
type RedownloadVideo struct {
	AuthCookie       *Cookie                  `json:"auth_cookie,omitempty"`
	ShowModal        *bool                    `json:"show_modal,omitempty"`
	Size             *RedownloadVideoSizeEnum `json:"size,omitempty"`
	VerificationCode *string                  `json:"verification_code,omitempty"`
}
