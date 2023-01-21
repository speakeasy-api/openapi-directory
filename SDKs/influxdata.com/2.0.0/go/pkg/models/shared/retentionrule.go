package shared

type RetentionRuleTypeEnum string

const (
	RetentionRuleTypeEnumExpire RetentionRuleTypeEnum = "expire"
)

type RetentionRule struct {
	EverySeconds              int64                 `json:"everySeconds"`
	ShardGroupDurationSeconds *int64                `json:"shardGroupDurationSeconds,omitempty"`
	Type                      RetentionRuleTypeEnum `json:"type"`
}
