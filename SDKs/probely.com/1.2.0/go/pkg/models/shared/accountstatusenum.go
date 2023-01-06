package shared

type AccountStatusEnum string

const (
	AccountStatusEnumActive     AccountStatusEnum = "active"
	AccountStatusEnumTrialEnded AccountStatusEnum = "trial_ended"
	AccountStatusEnumCanceled   AccountStatusEnum = "canceled"
)
