package shared

type JobFailureEnum string

const (
	JobFailureEnumInternalProcessing     JobFailureEnum = "internal_processing"
	JobFailureEnumDownloadFailure        JobFailureEnum = "download_failure"
	JobFailureEnumDurationExceeded       JobFailureEnum = "duration_exceeded"
	JobFailureEnumDurationTooShort       JobFailureEnum = "duration_too_short"
	JobFailureEnumInvalidMedia           JobFailureEnum = "invalid_media"
	JobFailureEnumEmptyMedia             JobFailureEnum = "empty_media"
	JobFailureEnumTranscription          JobFailureEnum = "transcription"
	JobFailureEnumInsufficientBalance    JobFailureEnum = "insufficient_balance"
	JobFailureEnumInvoicingLimitExceeded JobFailureEnum = "invoicing_limit_exceeded"
)

type JobLanguageEnum string

const (
	JobLanguageEnumEn  JobLanguageEnum = "en"
	JobLanguageEnumAr  JobLanguageEnum = "ar"
	JobLanguageEnumBg  JobLanguageEnum = "bg"
	JobLanguageEnumCa  JobLanguageEnum = "ca"
	JobLanguageEnumCmn JobLanguageEnum = "cmn"
	JobLanguageEnumCs  JobLanguageEnum = "cs"
	JobLanguageEnumDa  JobLanguageEnum = "da"
	JobLanguageEnumDe  JobLanguageEnum = "de"
	JobLanguageEnumEl  JobLanguageEnum = "el"
	JobLanguageEnumEs  JobLanguageEnum = "es"
	JobLanguageEnumFi  JobLanguageEnum = "fi"
	JobLanguageEnumFr  JobLanguageEnum = "fr"
	JobLanguageEnumHi  JobLanguageEnum = "hi"
	JobLanguageEnumHr  JobLanguageEnum = "hr"
	JobLanguageEnumHu  JobLanguageEnum = "hu"
	JobLanguageEnumIt  JobLanguageEnum = "it"
	JobLanguageEnumJa  JobLanguageEnum = "ja"
	JobLanguageEnumKo  JobLanguageEnum = "ko"
	JobLanguageEnumLt  JobLanguageEnum = "lt"
	JobLanguageEnumLv  JobLanguageEnum = "lv"
	JobLanguageEnumMs  JobLanguageEnum = "ms"
	JobLanguageEnumNl  JobLanguageEnum = "nl"
	JobLanguageEnumNo  JobLanguageEnum = "no"
	JobLanguageEnumPl  JobLanguageEnum = "pl"
	JobLanguageEnumPt  JobLanguageEnum = "pt"
	JobLanguageEnumRo  JobLanguageEnum = "ro"
	JobLanguageEnumRu  JobLanguageEnum = "ru"
	JobLanguageEnumSk  JobLanguageEnum = "sk"
	JobLanguageEnumSl  JobLanguageEnum = "sl"
	JobLanguageEnumSv  JobLanguageEnum = "sv"
	JobLanguageEnumTr  JobLanguageEnum = "tr"
)

type JobStatusEnum string

const (
	JobStatusEnumInProgress  JobStatusEnum = "in_progress"
	JobStatusEnumTranscribed JobStatusEnum = "transcribed"
	JobStatusEnumFailed      JobStatusEnum = "failed"
)

type JobTypeEnum string

const (
	JobTypeEnumAsync JobTypeEnum = "async"
)

// Job
// Rev.ai Transcription Job
// ***
// Note: properties are not displayed in the returned object if they are null
type Job struct {
	CallbackURL          *string          `json:"callback_url,omitempty"`
	CompletedOn          *string          `json:"completed_on,omitempty"`
	CreatedOn            *string          `json:"created_on,omitempty"`
	CustomVocabularyID   *string          `json:"custom_vocabulary_id,omitempty"`
	DeleteAfterSeconds   *int64           `json:"delete_after_seconds,omitempty"`
	DurationSeconds      *float64         `json:"duration_seconds,omitempty"`
	Failure              *JobFailureEnum  `json:"failure,omitempty"`
	FailureDetail        *string          `json:"failure_detail,omitempty"`
	FilterProfanity      *bool            `json:"filter_profanity,omitempty"`
	ID                   *string          `json:"id,omitempty"`
	Language             *JobLanguageEnum `json:"language,omitempty"`
	MediaURL             *string          `json:"media_url,omitempty"`
	Metadata             *string          `json:"metadata,omitempty"`
	Name                 *string          `json:"name,omitempty"`
	RemoveDisfluencies   *bool            `json:"remove_disfluencies,omitempty"`
	SkipDiarization      *bool            `json:"skip_diarization,omitempty"`
	SkipPunctuation      *bool            `json:"skip_punctuation,omitempty"`
	SpeakerChannelsCount *int64           `json:"speaker_channels_count,omitempty"`
	Status               *JobStatusEnum   `json:"status,omitempty"`
	Type                 *JobTypeEnum     `json:"type,omitempty"`
}
