package shared

// ExtensionConfig
// Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline. For Android versions 13 and above, extension apps are exempt from battery restrictions so will not be placed into the restricted App Standby Bucket (https://developer.android.com/topic/performance/appstandby#restricted-bucket). Extensions apps are also protected against users clearing their data or force-closing the application, although admins can continue to use the clear app data command (https://developer.android.com/management/reference/rest/v1/enterprises.devices/issueCommand#CommandType) on extension apps if needed for Android 13 and above.
type ExtensionConfig struct {
	NotificationReceiver         *string  `json:"notificationReceiver,omitempty"`
	SigningKeyFingerprintsSha256 []string `json:"signingKeyFingerprintsSha256,omitempty"`
}
