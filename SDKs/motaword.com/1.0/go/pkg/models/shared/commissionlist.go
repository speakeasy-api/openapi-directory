package shared

type CommissionList struct {
	Commissions []Commission `json:"commissions,omitempty"`
	Meta        *PagingMeta  `json:"meta,omitempty"`
}
