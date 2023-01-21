package shared

type CheckStatusLevelEnum string

const (
	CheckStatusLevelEnumUnknown CheckStatusLevelEnum = "UNKNOWN"
	CheckStatusLevelEnumOk      CheckStatusLevelEnum = "OK"
	CheckStatusLevelEnumInfo    CheckStatusLevelEnum = "INFO"
	CheckStatusLevelEnumCrit    CheckStatusLevelEnum = "CRIT"
	CheckStatusLevelEnumWarn    CheckStatusLevelEnum = "WARN"
)
