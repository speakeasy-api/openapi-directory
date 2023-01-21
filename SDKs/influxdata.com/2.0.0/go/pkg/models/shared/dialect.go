package shared

type DialectAnnotationsEnum string

const (
	DialectAnnotationsEnumGroup    DialectAnnotationsEnum = "group"
	DialectAnnotationsEnumDatatype DialectAnnotationsEnum = "datatype"
	DialectAnnotationsEnumDefault  DialectAnnotationsEnum = "default"
)

type DialectDateTimeFormatEnum string

const (
	DialectDateTimeFormatEnumRfc3339     DialectDateTimeFormatEnum = "RFC3339"
	DialectDateTimeFormatEnumRfc3339Nano DialectDateTimeFormatEnum = "RFC3339Nano"
)

// Dialect
// Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions
type Dialect struct {
	Annotations    []DialectAnnotationsEnum   `json:"annotations,omitempty"`
	CommentPrefix  *string                    `json:"commentPrefix,omitempty"`
	DateTimeFormat *DialectDateTimeFormatEnum `json:"dateTimeFormat,omitempty"`
	Delimiter      *string                    `json:"delimiter,omitempty"`
	Header         *bool                      `json:"header,omitempty"`
}
