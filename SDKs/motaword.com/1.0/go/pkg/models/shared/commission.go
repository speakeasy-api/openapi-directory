package shared

import (
	"time"
)

type CommissionStatusEnum string

const (
	CommissionStatusEnumCompleted      CommissionStatusEnum = "completed"
	CommissionStatusEnumUnclaimed      CommissionStatusEnum = "unclaimed"
	CommissionStatusEnumFailed         CommissionStatusEnum = "failed"
	CommissionStatusEnumSent           CommissionStatusEnum = "sent"
	CommissionStatusEnumWaiting        CommissionStatusEnum = "waiting"
	CommissionStatusEnumWaitingInvoice CommissionStatusEnum = "waiting_invoice"
)

type Commission struct {
	Amount  *Monetary             `json:"amount,omitempty"`
	Date    *time.Time            `json:"date,omitempty"`
	Project *Project              `json:"project,omitempty"`
	Status  *CommissionStatusEnum `json:"status,omitempty"`
}
