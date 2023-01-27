package shared

type GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum string

const (
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumUnknown     GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum = "UNKNOWN"
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumSupported   GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum = "SUPPORTED"
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumStale       GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum = "STALE"
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumDeprecated  GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum = "DEPRECATED"
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumUnsupported GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum = "UNSUPPORTED"
)

// GoogleCloudDatapipelinesV1SDKVersion
// The version of the SDK used to run the job.
type GoogleCloudDatapipelinesV1SDKVersion struct {
	SdkSupportStatus   *GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum `json:"sdkSupportStatus,omitempty"`
	Version            *string                                                   `json:"version,omitempty"`
	VersionDisplayName *string                                                   `json:"versionDisplayName,omitempty"`
}
