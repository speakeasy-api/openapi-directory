package shared

type TagRuleOperatorEnum string

const (
	TagRuleOperatorEnumEqual         TagRuleOperatorEnum = "equal"
	TagRuleOperatorEnumNotequal      TagRuleOperatorEnum = "notequal"
	TagRuleOperatorEnumEqualregex    TagRuleOperatorEnum = "equalregex"
	TagRuleOperatorEnumNotequalregex TagRuleOperatorEnum = "notequalregex"
)

type TagRule struct {
	Key      *string              `json:"key,omitempty"`
	Operator *TagRuleOperatorEnum `json:"operator,omitempty"`
	Value    *string              `json:"value,omitempty"`
}
