package shared

type PreviewContentTypeEnum string

const (
	PreviewContentTypeEnumAudioMp3 PreviewContentTypeEnum = "audio/mp3"
)

// Preview
// Preview information
type Preview struct {
	ContentType *PreviewContentTypeEnum `json:"content_type,omitempty"`
	URL         *string                 `json:"url,omitempty"`
}
