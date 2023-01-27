package shared

type BackgroundJobLogEntryCompletionStateEnum string

const (
	BackgroundJobLogEntryCompletionStateEnumJobCompletionStateUnspecified BackgroundJobLogEntryCompletionStateEnum = "JOB_COMPLETION_STATE_UNSPECIFIED"
	BackgroundJobLogEntryCompletionStateEnumSucceeded                     BackgroundJobLogEntryCompletionStateEnum = "SUCCEEDED"
	BackgroundJobLogEntryCompletionStateEnumFailed                        BackgroundJobLogEntryCompletionStateEnum = "FAILED"
)

type BackgroundJobLogEntryJobTypeEnum string

const (
	BackgroundJobLogEntryJobTypeEnumBackgroundJobTypeUnspecified      BackgroundJobLogEntryJobTypeEnum = "BACKGROUND_JOB_TYPE_UNSPECIFIED"
	BackgroundJobLogEntryJobTypeEnumBackgroundJobTypeSourceSeed       BackgroundJobLogEntryJobTypeEnum = "BACKGROUND_JOB_TYPE_SOURCE_SEED"
	BackgroundJobLogEntryJobTypeEnumBackgroundJobTypeConvert          BackgroundJobLogEntryJobTypeEnum = "BACKGROUND_JOB_TYPE_CONVERT"
	BackgroundJobLogEntryJobTypeEnumBackgroundJobTypeApplyDestination BackgroundJobLogEntryJobTypeEnum = "BACKGROUND_JOB_TYPE_APPLY_DESTINATION"
	BackgroundJobLogEntryJobTypeEnumBackgroundJobTypeImportRulesFile  BackgroundJobLogEntryJobTypeEnum = "BACKGROUND_JOB_TYPE_IMPORT_RULES_FILE"
)

// BackgroundJobLogEntry
// Execution log of a background job.
type BackgroundJobLogEntry struct {
	CompletionComment     *string                                   `json:"completionComment,omitempty"`
	CompletionState       *BackgroundJobLogEntryCompletionStateEnum `json:"completionState,omitempty"`
	FinishTime            *string                                   `json:"finishTime,omitempty"`
	ID                    *string                                   `json:"id,omitempty"`
	ImportRulesJobDetails *ImportRulesJobDetails                    `json:"importRulesJobDetails,omitempty"`
	JobType               *BackgroundJobLogEntryJobTypeEnum         `json:"jobType,omitempty"`
	RequestAutocommit     *bool                                     `json:"requestAutocommit,omitempty"`
	SeedJobDetails        *SeedJobDetails                           `json:"seedJobDetails,omitempty"`
	StartTime             *string                                   `json:"startTime,omitempty"`
}
