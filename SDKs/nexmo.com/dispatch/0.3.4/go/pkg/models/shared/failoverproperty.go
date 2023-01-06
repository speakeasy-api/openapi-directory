package shared

type FailoverPropertyConditionStatusEnum string

const (
	FailoverPropertyConditionStatusEnumDelivered FailoverPropertyConditionStatusEnum = "delivered"
	FailoverPropertyConditionStatusEnumRead      FailoverPropertyConditionStatusEnum = "read"
)

// FailoverProperty
// Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
type FailoverProperty struct {
	ConditionStatus *FailoverPropertyConditionStatusEnum `json:"condition_status,omitempty"`
	ExpiryTime      *int64                               `json:"expiry_time,omitempty"`
}
