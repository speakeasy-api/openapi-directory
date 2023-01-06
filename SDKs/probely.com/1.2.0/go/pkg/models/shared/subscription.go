package shared

type SubscriptionInput struct {
	CouponIds []string `json:"coupon_ids,omitempty"`
	TargetIds []string `json:"target_ids,omitempty"`
}
