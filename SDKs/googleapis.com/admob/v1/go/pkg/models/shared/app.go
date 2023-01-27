package shared

type AppAppApprovalStateEnum string

const (
	AppAppApprovalStateEnumAppApprovalStateUnspecified AppAppApprovalStateEnum = "APP_APPROVAL_STATE_UNSPECIFIED"
	AppAppApprovalStateEnumActionRequired              AppAppApprovalStateEnum = "ACTION_REQUIRED"
	AppAppApprovalStateEnumInReview                    AppAppApprovalStateEnum = "IN_REVIEW"
	AppAppApprovalStateEnumApproved                    AppAppApprovalStateEnum = "APPROVED"
)

// App
// Describes an AdMob app for a specific platform (For example: Android or iOS).
type App struct {
	AppApprovalState *AppAppApprovalStateEnum `json:"appApprovalState,omitempty"`
	AppID            *string                  `json:"appId,omitempty"`
	LinkedAppInfo    *AppLinkedAppInfo        `json:"linkedAppInfo,omitempty"`
	ManualAppInfo    *AppManualAppInfo        `json:"manualAppInfo,omitempty"`
	Name             *string                  `json:"name,omitempty"`
	Platform         *string                  `json:"platform,omitempty"`
}
