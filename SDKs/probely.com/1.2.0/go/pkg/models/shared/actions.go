package shared

type ActionsActionEnum string

const (
	ActionsActionEnumEdit        ActionsActionEnum = "edit"
	ActionsActionEnumDelete      ActionsActionEnum = "delete"
	ActionsActionEnumTrial       ActionsActionEnum = "trial"
	ActionsActionEnumPlan        ActionsActionEnum = "plan"
	ActionsActionEnumSubscribe   ActionsActionEnum = "subscribe"
	ActionsActionEnumUnsubscribe ActionsActionEnum = "unsubscribe"
	ActionsActionEnumArchive     ActionsActionEnum = "archive"
	ActionsActionEnumActivate    ActionsActionEnum = "activate"
)

type Actions struct {
	Action *ActionsActionEnum `json:"action,omitempty"`
	Label  *string            `json:"label,omitempty"`
}
