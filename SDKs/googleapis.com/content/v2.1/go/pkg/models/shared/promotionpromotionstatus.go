package shared

// PromotionPromotionStatus
// The status of the promotion.
type PromotionPromotionStatus struct {
	CreationDate        *string                                     `json:"creationDate,omitempty"`
	DestinationStatuses []PromotionPromotionStatusDestinationStatus `json:"destinationStatuses,omitempty"`
	LastUpdateDate      *string                                     `json:"lastUpdateDate,omitempty"`
	PromotionIssue      []PromotionPromotionStatusPromotionIssue    `json:"promotionIssue,omitempty"`
}
