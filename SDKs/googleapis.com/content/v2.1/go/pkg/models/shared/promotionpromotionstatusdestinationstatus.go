package shared

type PromotionPromotionStatusDestinationStatusStatusEnum string

const (
	PromotionPromotionStatusDestinationStatusStatusEnumStateUnspecified PromotionPromotionStatusDestinationStatusStatusEnum = "STATE_UNSPECIFIED"
	PromotionPromotionStatusDestinationStatusStatusEnumInReview         PromotionPromotionStatusDestinationStatusStatusEnum = "IN_REVIEW"
	PromotionPromotionStatusDestinationStatusStatusEnumRejected         PromotionPromotionStatusDestinationStatusStatusEnum = "REJECTED"
	PromotionPromotionStatusDestinationStatusStatusEnumLive             PromotionPromotionStatusDestinationStatusStatusEnum = "LIVE"
	PromotionPromotionStatusDestinationStatusStatusEnumStopped          PromotionPromotionStatusDestinationStatusStatusEnum = "STOPPED"
	PromotionPromotionStatusDestinationStatusStatusEnumExpired          PromotionPromotionStatusDestinationStatusStatusEnum = "EXPIRED"
	PromotionPromotionStatusDestinationStatusStatusEnumPending          PromotionPromotionStatusDestinationStatusStatusEnum = "PENDING"
)

// PromotionPromotionStatusDestinationStatus
// The destination status of the promotion.
type PromotionPromotionStatusDestinationStatus struct {
	Destination *string                                              `json:"destination,omitempty"`
	Status      *PromotionPromotionStatusDestinationStatusStatusEnum `json:"status,omitempty"`
}
