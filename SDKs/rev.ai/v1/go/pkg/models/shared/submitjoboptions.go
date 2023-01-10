package shared

// SubmitJobOptionsCustomVocabularies
// Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
type SubmitJobOptionsCustomVocabularies struct {
	Phrases []string `json:"phrases"`
}

type SubmitJobOptionsLanguageEnum string

const (
	SubmitJobOptionsLanguageEnumEn  SubmitJobOptionsLanguageEnum = "en"
	SubmitJobOptionsLanguageEnumAr  SubmitJobOptionsLanguageEnum = "ar"
	SubmitJobOptionsLanguageEnumBg  SubmitJobOptionsLanguageEnum = "bg"
	SubmitJobOptionsLanguageEnumCa  SubmitJobOptionsLanguageEnum = "ca"
	SubmitJobOptionsLanguageEnumCmn SubmitJobOptionsLanguageEnum = "cmn"
	SubmitJobOptionsLanguageEnumCs  SubmitJobOptionsLanguageEnum = "cs"
	SubmitJobOptionsLanguageEnumDa  SubmitJobOptionsLanguageEnum = "da"
	SubmitJobOptionsLanguageEnumDe  SubmitJobOptionsLanguageEnum = "de"
	SubmitJobOptionsLanguageEnumEl  SubmitJobOptionsLanguageEnum = "el"
	SubmitJobOptionsLanguageEnumEs  SubmitJobOptionsLanguageEnum = "es"
	SubmitJobOptionsLanguageEnumFi  SubmitJobOptionsLanguageEnum = "fi"
	SubmitJobOptionsLanguageEnumFr  SubmitJobOptionsLanguageEnum = "fr"
	SubmitJobOptionsLanguageEnumHi  SubmitJobOptionsLanguageEnum = "hi"
	SubmitJobOptionsLanguageEnumHr  SubmitJobOptionsLanguageEnum = "hr"
	SubmitJobOptionsLanguageEnumHu  SubmitJobOptionsLanguageEnum = "hu"
	SubmitJobOptionsLanguageEnumIt  SubmitJobOptionsLanguageEnum = "it"
	SubmitJobOptionsLanguageEnumJa  SubmitJobOptionsLanguageEnum = "ja"
	SubmitJobOptionsLanguageEnumKo  SubmitJobOptionsLanguageEnum = "ko"
	SubmitJobOptionsLanguageEnumLt  SubmitJobOptionsLanguageEnum = "lt"
	SubmitJobOptionsLanguageEnumLv  SubmitJobOptionsLanguageEnum = "lv"
	SubmitJobOptionsLanguageEnumMs  SubmitJobOptionsLanguageEnum = "ms"
	SubmitJobOptionsLanguageEnumNl  SubmitJobOptionsLanguageEnum = "nl"
	SubmitJobOptionsLanguageEnumNo  SubmitJobOptionsLanguageEnum = "no"
	SubmitJobOptionsLanguageEnumPl  SubmitJobOptionsLanguageEnum = "pl"
	SubmitJobOptionsLanguageEnumPt  SubmitJobOptionsLanguageEnum = "pt"
	SubmitJobOptionsLanguageEnumRo  SubmitJobOptionsLanguageEnum = "ro"
	SubmitJobOptionsLanguageEnumRu  SubmitJobOptionsLanguageEnum = "ru"
	SubmitJobOptionsLanguageEnumSk  SubmitJobOptionsLanguageEnum = "sk"
	SubmitJobOptionsLanguageEnumSl  SubmitJobOptionsLanguageEnum = "sl"
	SubmitJobOptionsLanguageEnumSv  SubmitJobOptionsLanguageEnum = "sv"
	SubmitJobOptionsLanguageEnumTr  SubmitJobOptionsLanguageEnum = "tr"
)

// SubmitJobOptions
// Rev.ai Job Options Object Model
type SubmitJobOptions struct {
	CallbackURL          *string                              `json:"callback_url,omitempty"`
	CustomVocabularies   []SubmitJobOptionsCustomVocabularies `json:"custom_vocabularies,omitempty"`
	CustomVocabularyID   *string                              `json:"custom_vocabulary_id,omitempty"`
	DeleteAfterSeconds   *int64                               `json:"delete_after_seconds,omitempty"`
	FilterProfanity      *bool                                `json:"filter_profanity,omitempty"`
	Language             *SubmitJobOptionsLanguageEnum        `json:"language,omitempty"`
	MediaURL             *string                              `json:"media_url,omitempty"`
	Metadata             *string                              `json:"metadata,omitempty"`
	RemoveDisfluencies   *bool                                `json:"remove_disfluencies,omitempty"`
	SkipDiarization      *bool                                `json:"skip_diarization,omitempty"`
	SkipPunctuation      *bool                                `json:"skip_punctuation,omitempty"`
	SpeakerChannelsCount *int64                               `json:"speaker_channels_count,omitempty"`
}
