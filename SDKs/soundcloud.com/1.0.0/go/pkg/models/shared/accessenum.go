package shared

type AccessEnum string

const (
	AccessEnumPlayable AccessEnum = "playable"
	AccessEnumPreview  AccessEnum = "preview"
	AccessEnumBlocked  AccessEnum = "blocked"
)
