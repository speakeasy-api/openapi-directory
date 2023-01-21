package shared

type PatchRetentionRuleTypeEnum string

const (
	PatchRetentionRuleTypeEnumExpire PatchRetentionRuleTypeEnum = "expire"
)

// PatchRetentionRule
// Updates to a rule to expire or retain data.
type PatchRetentionRule struct {
	EverySeconds              *int64                     `json:"everySeconds,omitempty"`
	ShardGroupDurationSeconds *int64                     `json:"shardGroupDurationSeconds,omitempty"`
	Type                      PatchRetentionRuleTypeEnum `json:"type"`
}
