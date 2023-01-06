package shared

type FourHundredAndOneUnauthorizedCodeEnum string

const (
	FourHundredAndOneUNAUTHORIZEDCodeEnumUnauthorized FourHundredAndOneUnauthorizedCodeEnum = "UNAUTHORIZED"
)

type FourHundredAndOneUnauthorizedMessageEnum string

const (
	FourHundredAndOneUNAUTHORIZEDMessageEnumInvalidAPIKey FourHundredAndOneUnauthorizedMessageEnum = "Invalid API key"
)

type FourHundredAndOneUnauthorized struct {
	Code       *FourHundredAndOneUnauthorizedCodeEnum    `json:"code,omitempty"`
	Message    *FourHundredAndOneUnauthorizedMessageEnum `json:"message,omitempty"`
	Timestamp  *string                                   `json:"timestamp,omitempty"`
	TrackingID *string                                   `json:"trackingId,omitempty"`
}
