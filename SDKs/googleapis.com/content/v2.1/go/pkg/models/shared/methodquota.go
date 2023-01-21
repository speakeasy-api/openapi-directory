package shared

// MethodQuota
// The quota information per method in the Content API. Includes only methods with current usage greater than zero for your account.
type MethodQuota struct {
	Method     *string `json:"method,omitempty"`
	QuotaLimit *string `json:"quotaLimit,omitempty"`
	QuotaUsage *string `json:"quotaUsage,omitempty"`
}
