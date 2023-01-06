package shared

type MethodEnum string

const (
	MethodEnumGet     MethodEnum = "GET"
	MethodEnumOptions MethodEnum = "OPTIONS"
	MethodEnumPost    MethodEnum = "POST"
	MethodEnumPut     MethodEnum = "PUT"
	MethodEnumPatch   MethodEnum = "PATCH"
	MethodEnumDelete  MethodEnum = "DELETE"
	MethodEnumHead    MethodEnum = "HEAD"
)
