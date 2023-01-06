package shared

type TagTypeEnum string

const (
	TagTypeEnumRegular  TagTypeEnum = "Regular"
	TagTypeEnumNegative TagTypeEnum = "Negative"
)

// Tag
// Represents a Tag.
type Tag struct {
	Description *string      `json:"description,omitempty"`
	ID          *string      `json:"id,omitempty"`
	ImageCount  *int32       `json:"imageCount,omitempty"`
	Name        *string      `json:"name,omitempty"`
	Type        *TagTypeEnum `json:"type,omitempty"`
}

// TagInput
// Represents a Tag.
type TagInput struct {
	Description *string      `json:"description,omitempty" form:"name=description"`
	Name        *string      `json:"name,omitempty" form:"name=name"`
	Type        *TagTypeEnum `json:"type,omitempty" form:"name=type"`
}
