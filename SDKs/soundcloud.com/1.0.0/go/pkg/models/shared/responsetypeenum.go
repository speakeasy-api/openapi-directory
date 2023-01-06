package shared

type ResponseTypeEnum string

const (
	ResponseTypeEnumCode         ResponseTypeEnum = "code"
	ResponseTypeEnumToken        ResponseTypeEnum = "token"
	ResponseTypeEnumCodeAndToken ResponseTypeEnum = "code_and_token"
)
