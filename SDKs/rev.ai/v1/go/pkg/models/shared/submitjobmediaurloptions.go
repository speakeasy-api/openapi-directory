package shared

// SubmitJobMediaURLOptionsCustomVocabularies
// Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
type SubmitJobMediaURLOptionsCustomVocabularies struct {
	Phrases []string `json:"phrases"`
}

type SubmitJobMediaURLOptionsLanguageEnum string

const (
	SubmitJobMediaURLOptionsLanguageEnumEn  SubmitJobMediaURLOptionsLanguageEnum = "en"
	SubmitJobMediaURLOptionsLanguageEnumAr  SubmitJobMediaURLOptionsLanguageEnum = "ar"
	SubmitJobMediaURLOptionsLanguageEnumBg  SubmitJobMediaURLOptionsLanguageEnum = "bg"
	SubmitJobMediaURLOptionsLanguageEnumCa  SubmitJobMediaURLOptionsLanguageEnum = "ca"
	SubmitJobMediaURLOptionsLanguageEnumCmn SubmitJobMediaURLOptionsLanguageEnum = "cmn"
	SubmitJobMediaURLOptionsLanguageEnumCs  SubmitJobMediaURLOptionsLanguageEnum = "cs"
	SubmitJobMediaURLOptionsLanguageEnumDa  SubmitJobMediaURLOptionsLanguageEnum = "da"
	SubmitJobMediaURLOptionsLanguageEnumDe  SubmitJobMediaURLOptionsLanguageEnum = "de"
	SubmitJobMediaURLOptionsLanguageEnumEl  SubmitJobMediaURLOptionsLanguageEnum = "el"
	SubmitJobMediaURLOptionsLanguageEnumEs  SubmitJobMediaURLOptionsLanguageEnum = "es"
	SubmitJobMediaURLOptionsLanguageEnumFi  SubmitJobMediaURLOptionsLanguageEnum = "fi"
	SubmitJobMediaURLOptionsLanguageEnumFr  SubmitJobMediaURLOptionsLanguageEnum = "fr"
	SubmitJobMediaURLOptionsLanguageEnumHi  SubmitJobMediaURLOptionsLanguageEnum = "hi"
	SubmitJobMediaURLOptionsLanguageEnumHr  SubmitJobMediaURLOptionsLanguageEnum = "hr"
	SubmitJobMediaURLOptionsLanguageEnumHu  SubmitJobMediaURLOptionsLanguageEnum = "hu"
	SubmitJobMediaURLOptionsLanguageEnumIt  SubmitJobMediaURLOptionsLanguageEnum = "it"
	SubmitJobMediaURLOptionsLanguageEnumJa  SubmitJobMediaURLOptionsLanguageEnum = "ja"
	SubmitJobMediaURLOptionsLanguageEnumKo  SubmitJobMediaURLOptionsLanguageEnum = "ko"
	SubmitJobMediaURLOptionsLanguageEnumLt  SubmitJobMediaURLOptionsLanguageEnum = "lt"
	SubmitJobMediaURLOptionsLanguageEnumLv  SubmitJobMediaURLOptionsLanguageEnum = "lv"
	SubmitJobMediaURLOptionsLanguageEnumMs  SubmitJobMediaURLOptionsLanguageEnum = "ms"
	SubmitJobMediaURLOptionsLanguageEnumNl  SubmitJobMediaURLOptionsLanguageEnum = "nl"
	SubmitJobMediaURLOptionsLanguageEnumNo  SubmitJobMediaURLOptionsLanguageEnum = "no"
	SubmitJobMediaURLOptionsLanguageEnumPl  SubmitJobMediaURLOptionsLanguageEnum = "pl"
	SubmitJobMediaURLOptionsLanguageEnumPt  SubmitJobMediaURLOptionsLanguageEnum = "pt"
	SubmitJobMediaURLOptionsLanguageEnumRo  SubmitJobMediaURLOptionsLanguageEnum = "ro"
	SubmitJobMediaURLOptionsLanguageEnumRu  SubmitJobMediaURLOptionsLanguageEnum = "ru"
	SubmitJobMediaURLOptionsLanguageEnumSk  SubmitJobMediaURLOptionsLanguageEnum = "sk"
	SubmitJobMediaURLOptionsLanguageEnumSl  SubmitJobMediaURLOptionsLanguageEnum = "sl"
	SubmitJobMediaURLOptionsLanguageEnumSv  SubmitJobMediaURLOptionsLanguageEnum = "sv"
	SubmitJobMediaURLOptionsLanguageEnumTr  SubmitJobMediaURLOptionsLanguageEnum = "tr"
)

// SubmitJobMediaURLOptions
// Rev.ai Job Options Object Model
type SubmitJobMediaURLOptions struct {
	CallbackURL          *string                                      `json:"callback_url,omitempty"`
	CustomVocabularies   []SubmitJobMediaURLOptionsCustomVocabularies `json:"custom_vocabularies,omitempty"`
	CustomVocabularyID   *string                                      `json:"custom_vocabulary_id,omitempty"`
	DeleteAfterSeconds   *int64                                       `json:"delete_after_seconds,omitempty"`
	FilterProfanity      *bool                                        `json:"filter_profanity,omitempty"`
	Language             *SubmitJobMediaURLOptionsLanguageEnum        `json:"language,omitempty"`
	MediaURL             string                                       `json:"media_url"`
	Metadata             *string                                      `json:"metadata,omitempty"`
	RemoveDisfluencies   *bool                                        `json:"remove_disfluencies,omitempty"`
	SkipDiarization      *bool                                        `json:"skip_diarization,omitempty"`
	SkipPunctuation      *bool                                        `json:"skip_punctuation,omitempty"`
	SpeakerChannelsCount *int64                                       `json:"speaker_channels_count,omitempty"`
}
