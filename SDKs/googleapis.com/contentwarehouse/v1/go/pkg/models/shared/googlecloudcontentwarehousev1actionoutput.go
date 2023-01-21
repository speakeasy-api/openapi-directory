package shared

type GoogleCloudContentwarehouseV1ActionOutputActionStateEnum string

const (
	GoogleCloudContentwarehouseV1ActionOutputActionStateEnumUnknown         GoogleCloudContentwarehouseV1ActionOutputActionStateEnum = "UNKNOWN"
	GoogleCloudContentwarehouseV1ActionOutputActionStateEnumActionSucceeded GoogleCloudContentwarehouseV1ActionOutputActionStateEnum = "ACTION_SUCCEEDED"
	GoogleCloudContentwarehouseV1ActionOutputActionStateEnumActionFailed    GoogleCloudContentwarehouseV1ActionOutputActionStateEnum = "ACTION_FAILED"
	GoogleCloudContentwarehouseV1ActionOutputActionStateEnumActionTimedOut  GoogleCloudContentwarehouseV1ActionOutputActionStateEnum = "ACTION_TIMED_OUT"
	GoogleCloudContentwarehouseV1ActionOutputActionStateEnumActionPending   GoogleCloudContentwarehouseV1ActionOutputActionStateEnum = "ACTION_PENDING"
)

// GoogleCloudContentwarehouseV1ActionOutput
// Represents the result of executing an action.
type GoogleCloudContentwarehouseV1ActionOutput struct {
	ActionID      *string                                                   `json:"actionId,omitempty"`
	ActionState   *GoogleCloudContentwarehouseV1ActionOutputActionStateEnum `json:"actionState,omitempty"`
	OutputMessage *string                                                   `json:"outputMessage,omitempty"`
}
