package shared

type PsuHTTPMethodEnum string

const (
	PSUHTTPMethodEnumGet    PsuHTTPMethodEnum = "GET"
	PSUHTTPMethodEnumPost   PsuHTTPMethodEnum = "POST"
	PSUHTTPMethodEnumPut    PsuHTTPMethodEnum = "PUT"
	PSUHTTPMethodEnumPatch  PsuHTTPMethodEnum = "PATCH"
	PSUHTTPMethodEnumDelete PsuHTTPMethodEnum = "DELETE"
)
