package shared

type ActionActionEnum string

const (
	ActionActionEnumNull      ActionActionEnum = "null"
	ActionActionEnumTrial     ActionActionEnum = "trial"
	ActionActionEnumPlan      ActionActionEnum = "plan"
	ActionActionEnumSubscribe ActionActionEnum = "subscribe"
)

type Action struct {
	Action *ActionActionEnum `json:"action,omitempty"`
}
