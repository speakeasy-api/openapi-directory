package shared

type FindingStateEnum string

const (
	FindingStateEnumNotfixed FindingStateEnum = "notfixed"
	FindingStateEnumInvalid  FindingStateEnum = "invalid"
	FindingStateEnumAccepted FindingStateEnum = "accepted"
	FindingStateEnumFixed    FindingStateEnum = "fixed"
)
