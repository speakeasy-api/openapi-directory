package shared

type PackageStatusEnumEnum string

const (
	PackageStatusEnumEnumStarted   PackageStatusEnumEnum = "started"
	PackageStatusEnumEnumPackaging PackageStatusEnumEnum = "packaging"
	PackageStatusEnumEnumCompleted PackageStatusEnumEnum = "completed"
)
