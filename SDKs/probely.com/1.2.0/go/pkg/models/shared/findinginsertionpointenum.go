package shared

type FindingInsertionPointEnum string

const (
	FindingInsertionPointEnumCookie                FindingInsertionPointEnum = "cookie"
	FindingInsertionPointEnumHeader                FindingInsertionPointEnum = "header"
	FindingInsertionPointEnumParameter             FindingInsertionPointEnum = "parameter"
	FindingInsertionPointEnumArbitraryURLParamName FindingInsertionPointEnum = "arbitrary_url_param_name"
	FindingInsertionPointEnumURLPathFolder         FindingInsertionPointEnum = "url_path_folder"
	FindingInsertionPointEnumUnknown               FindingInsertionPointEnum = ""
)
