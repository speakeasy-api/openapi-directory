package shared

type SearchPatternEnum string

const (
	SearchPatternEnumSms         SearchPatternEnum = "SMS"
	SearchPatternEnumVoice       SearchPatternEnum = "VOICE"
	SearchPatternEnumSmsVoice    SearchPatternEnum = "SMS,VOICE"
	SearchPatternEnumMms         SearchPatternEnum = "MMS"
	SearchPatternEnumSmsMms      SearchPatternEnum = "SMS,MMS"
	SearchPatternEnumVoiceMms    SearchPatternEnum = "VOICE,MMS"
	SearchPatternEnumSmsMmsVoice SearchPatternEnum = "SMS,MMS,VOICE"
)
