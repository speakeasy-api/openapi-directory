package shared

type VoiceStatusEnum string

const (
	VoiceStatusEnumAnswered VoiceStatusEnum = "answered"
	VoiceStatusEnumMachine  VoiceStatusEnum = "machine"
	VoiceStatusEnumError    VoiceStatusEnum = "error"
	VoiceStatusEnumFailed   VoiceStatusEnum = "failed"
)
