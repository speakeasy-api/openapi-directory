package shared

type TagTypeEnum string

const (
	TagTypeEnumRegular  TagTypeEnum = "Regular"
	TagTypeEnumNegative TagTypeEnum = "Negative"
)

// Tag
// Represents a Tag.
type Tag struct {
	Description string      `json:"description"`
	ID          *string     `json:"id,omitempty"`
	ImageCount  *int32      `json:"imageCount,omitempty"`
	Name        string      `json:"name"`
	Type        TagTypeEnum `json:"type"`
}

// TagInput
// Represents a Tag.
type TagInput struct {
	Description string      `json:"description" form:"name=description"`
	Name        string      `json:"name" form:"name=name"`
	Type        TagTypeEnum `json:"type" form:"name=type"`
}
