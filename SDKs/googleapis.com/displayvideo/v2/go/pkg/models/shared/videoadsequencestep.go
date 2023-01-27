package shared

type VideoAdSequenceStepInteractionTypeEnum string

const (
	VideoAdSequenceStepInteractionTypeEnumInteractionTypeUnspecified       VideoAdSequenceStepInteractionTypeEnum = "INTERACTION_TYPE_UNSPECIFIED"
	VideoAdSequenceStepInteractionTypeEnumInteractionTypePaidView          VideoAdSequenceStepInteractionTypeEnum = "INTERACTION_TYPE_PAID_VIEW"
	VideoAdSequenceStepInteractionTypeEnumInteractionTypeSkip              VideoAdSequenceStepInteractionTypeEnum = "INTERACTION_TYPE_SKIP"
	VideoAdSequenceStepInteractionTypeEnumInteractionTypeImpression        VideoAdSequenceStepInteractionTypeEnum = "INTERACTION_TYPE_IMPRESSION"
	VideoAdSequenceStepInteractionTypeEnumInteractionTypeEngagedImpression VideoAdSequenceStepInteractionTypeEnum = "INTERACTION_TYPE_ENGAGED_IMPRESSION"
)

// VideoAdSequenceStep
// The detail of a single step in a VideoAdSequence.
type VideoAdSequenceStep struct {
	AdGroupID       *string                                 `json:"adGroupId,omitempty"`
	InteractionType *VideoAdSequenceStepInteractionTypeEnum `json:"interactionType,omitempty"`
	PreviousStepID  *string                                 `json:"previousStepId,omitempty"`
	StepID          *string                                 `json:"stepId,omitempty"`
}
