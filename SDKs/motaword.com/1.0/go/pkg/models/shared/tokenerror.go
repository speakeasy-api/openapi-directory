package shared

type TokenErrorAccountStatusEnum string

const (
	TokenErrorAccountStatusEnumRegistered     TokenErrorAccountStatusEnum = "registered"
	TokenErrorAccountStatusEnumEmailConfirmed TokenErrorAccountStatusEnum = "email_confirmed"
	TokenErrorAccountStatusEnumDeleted        TokenErrorAccountStatusEnum = "deleted"
	TokenErrorAccountStatusEnumSuspended      TokenErrorAccountStatusEnum = "suspended"
	TokenErrorAccountStatusEnumRejected       TokenErrorAccountStatusEnum = "rejected"
	TokenErrorAccountStatusEnumApproved       TokenErrorAccountStatusEnum = "approved"
	TokenErrorAccountStatusEnumResume         TokenErrorAccountStatusEnum = "resume"
	TokenErrorAccountStatusEnumWebinar        TokenErrorAccountStatusEnum = "webinar"
	TokenErrorAccountStatusEnumCourse         TokenErrorAccountStatusEnum = "course"
)

type TokenError struct {
	AccountStatus *TokenErrorAccountStatusEnum `json:"account_status,omitempty"`
	Code          *string                      `json:"code,omitempty"`
	Help          *string                      `json:"help,omitempty"`
	HTTPCode      *int32                       `json:"http_code,omitempty"`
	Message       *string                      `json:"message,omitempty"`
}
