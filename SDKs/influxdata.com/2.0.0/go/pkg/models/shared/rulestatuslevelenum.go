package shared

type RuleStatusLevelEnum string

const (
	RuleStatusLevelEnumUnknown RuleStatusLevelEnum = "UNKNOWN"
	RuleStatusLevelEnumOk      RuleStatusLevelEnum = "OK"
	RuleStatusLevelEnumInfo    RuleStatusLevelEnum = "INFO"
	RuleStatusLevelEnumCrit    RuleStatusLevelEnum = "CRIT"
	RuleStatusLevelEnumWarn    RuleStatusLevelEnum = "WARN"
	RuleStatusLevelEnumAny     RuleStatusLevelEnum = "ANY"
)
