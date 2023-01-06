package shared

// Slack
// Options for slack notifications
type Slack struct {
	NotifyFindingFixed   *bool   `json:"notify_finding_fixed,omitempty"`
	NotifyHighFindings   *bool   `json:"notify_high_findings,omitempty"`
	NotifyLowFindings    *bool   `json:"notify_low_findings,omitempty"`
	NotifyMediumFindings *bool   `json:"notify_medium_findings,omitempty"`
	NotifyScanCompleted  *bool   `json:"notify_scan_completed,omitempty"`
	NotifyScanStarted    *bool   `json:"notify_scan_started,omitempty"`
	WebhookURL           *string `json:"webhook_url,omitempty"`
}
