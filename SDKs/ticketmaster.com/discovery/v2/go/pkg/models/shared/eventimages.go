package shared

type EventImagesTypeEnum string

const (
	EventImagesTypeEnumEvent EventImagesTypeEnum = "event"
)

// EventImages
// This class defines an Event with only images view on the Discovery API
type EventImages struct {
	ID     string
	Images []Image
	Type   EventImagesTypeEnum
}
