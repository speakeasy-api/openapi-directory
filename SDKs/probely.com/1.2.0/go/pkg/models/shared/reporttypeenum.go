package shared

type ReportTypeEnum string

const (
	ReportTypeEnumDefault ReportTypeEnum = "default"
	ReportTypeEnumOwasp   ReportTypeEnum = "owasp"
	ReportTypeEnumPci     ReportTypeEnum = "pci"
)
