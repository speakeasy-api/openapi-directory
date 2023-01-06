package shared

import (
	"time"
)

type Account struct {
	AutoCollection      *AccountAutoCollectionEnum `json:"auto_collection,omitempty"`
	Balance             *int64                     `json:"balance,omitempty"`
	BalanceCurrencyCode *string                    `json:"balance_currency_code,omitempty"`
	FreeTargetQuantity  *int64                     `json:"free_target_quantity,omitempty"`
	HasUsedTrial        *bool                      `json:"has_used_trial,omitempty"`
	Heroku              *bool                      `json:"heroku,omitempty"`
	NextBillingAt       *time.Time                 `json:"next_billing_at,omitempty"`
	Plan                *Plan                      `json:"plan,omitempty"`
	PlanTargetQuantity  *int64                     `json:"plan_target_quantity,omitempty"`
	PoolSize            *int64                     `json:"pool_size,omitempty"`
	Status              *AccountStatusEnum         `json:"status,omitempty"`
	TrialEnd            *time.Time                 `json:"trialEnd,omitempty"`
}
