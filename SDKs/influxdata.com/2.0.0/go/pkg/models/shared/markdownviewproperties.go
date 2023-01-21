package shared

type MarkdownViewPropertiesShapeEnum string

const (
	MarkdownViewPropertiesShapeEnumChronografV2 MarkdownViewPropertiesShapeEnum = "chronograf-v2"
)

type MarkdownViewPropertiesTypeEnum string

const (
	MarkdownViewPropertiesTypeEnumMarkdown MarkdownViewPropertiesTypeEnum = "markdown"
)

type MarkdownViewProperties struct {
	Note  string                          `json:"note"`
	Shape MarkdownViewPropertiesShapeEnum `json:"shape"`
	Type  MarkdownViewPropertiesTypeEnum  `json:"type"`
}
