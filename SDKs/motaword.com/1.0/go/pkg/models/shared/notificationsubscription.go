package shared

type NotificationSubscriptionDeviceEnum string

const (
	NotificationSubscriptionDeviceEnumIOs          NotificationSubscriptionDeviceEnum = "iOS"
	NotificationSubscriptionDeviceEnumAndroid      NotificationSubscriptionDeviceEnum = "Android"
	NotificationSubscriptionDeviceEnumChrome       NotificationSubscriptionDeviceEnum = "Chrome"
	NotificationSubscriptionDeviceEnumFirefox      NotificationSubscriptionDeviceEnum = "Firefox"
	NotificationSubscriptionDeviceEnumSafari       NotificationSubscriptionDeviceEnum = "Safari"
	NotificationSubscriptionDeviceEnumEdge         NotificationSubscriptionDeviceEnum = "Edge"
	NotificationSubscriptionDeviceEnumAmazon       NotificationSubscriptionDeviceEnum = "Amazon"
	NotificationSubscriptionDeviceEnumWindowsPhone NotificationSubscriptionDeviceEnum = "WindowsPhone"
	NotificationSubscriptionDeviceEnumWindows      NotificationSubscriptionDeviceEnum = "Windows"
	NotificationSubscriptionDeviceEnumMacOs        NotificationSubscriptionDeviceEnum = "MacOS"
)

type NotificationSubscriptionTypeEnum string

const (
	NotificationSubscriptionTypeEnumOneSignal NotificationSubscriptionTypeEnum = "OneSignal"
)

type NotificationSubscription struct {
	Device   *NotificationSubscriptionDeviceEnum `json:"device,omitempty"`
	Endpoint *string                             `json:"endpoint,omitempty"`
	Type     *NotificationSubscriptionTypeEnum   `json:"type,omitempty"`
}
