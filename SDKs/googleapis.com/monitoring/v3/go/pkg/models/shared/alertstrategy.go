// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AlertStrategy - Control over how the notification channels in notification_channels are notified when this alert fires.
type AlertStrategy struct {
	// If an alert policy that was active has no data for this long, any open incidents will close
	AutoClose *string `json:"autoClose,omitempty"`
	// Control how notifications will be sent out, on a per-channel basis.
	NotificationChannelStrategy []NotificationChannelStrategy `json:"notificationChannelStrategy,omitempty"`
	// Control over the rate of notifications sent to this alert policy's notification channels.
	NotificationRateLimit *NotificationRateLimit `json:"notificationRateLimit,omitempty"`
}
