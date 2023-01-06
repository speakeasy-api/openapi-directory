package shared

// SubmitJobMediaURLOptions
// Rev.ai Job Options Object Model
type SubmitJobMediaURLOptions struct {
	CallbackURL          *interface{} `json:"callback_url,omitempty"`
	CustomVocabularyID   *interface{} `json:"custom_vocabulary_id,omitempty"`
	DeleteAfterSeconds   *interface{} `json:"delete_after_seconds,omitempty"`
	FilterProfanity      *interface{} `json:"filter_profanity,omitempty"`
	Language             *interface{} `json:"language,omitempty"`
	Metadata             *interface{} `json:"metadata,omitempty"`
	RemoveDisfluencies   *interface{} `json:"remove_disfluencies,omitempty"`
	SkipDiarization      *interface{} `json:"skip_diarization,omitempty"`
	SkipPunctuation      *interface{} `json:"skip_punctuation,omitempty"`
	SpeakerChannelsCount *interface{} `json:"speaker_channels_count,omitempty"`
}
