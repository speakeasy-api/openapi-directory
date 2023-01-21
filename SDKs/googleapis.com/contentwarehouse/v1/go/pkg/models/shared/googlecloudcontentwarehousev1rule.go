package shared

type GoogleCloudContentwarehouseV1RuleTriggerTypeEnum string

const (
	GoogleCloudContentwarehouseV1RuleTriggerTypeEnumUnknown  GoogleCloudContentwarehouseV1RuleTriggerTypeEnum = "UNKNOWN"
	GoogleCloudContentwarehouseV1RuleTriggerTypeEnumOnCreate GoogleCloudContentwarehouseV1RuleTriggerTypeEnum = "ON_CREATE"
	GoogleCloudContentwarehouseV1RuleTriggerTypeEnumOnUpdate GoogleCloudContentwarehouseV1RuleTriggerTypeEnum = "ON_UPDATE"
)

// GoogleCloudContentwarehouseV1Rule
// Represents the rule for a content warehouse trigger.
type GoogleCloudContentwarehouseV1Rule struct {
	Actions     []GoogleCloudContentwarehouseV1Action             `json:"actions,omitempty"`
	Condition   *string                                           `json:"condition,omitempty"`
	Description *string                                           `json:"description,omitempty"`
	RuleID      *string                                           `json:"ruleId,omitempty"`
	TriggerType *GoogleCloudContentwarehouseV1RuleTriggerTypeEnum `json:"triggerType,omitempty"`
}
