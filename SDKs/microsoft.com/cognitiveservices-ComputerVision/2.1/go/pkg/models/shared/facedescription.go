package shared

type FaceDescriptionGenderEnum string

const (
	FaceDescriptionGenderEnumMale   FaceDescriptionGenderEnum = "Male"
	FaceDescriptionGenderEnumFemale FaceDescriptionGenderEnum = "Female"
)

// FaceDescription
// An object describing a face identified in the image.
type FaceDescription struct {
	Age           *int32                     `json:"age,omitempty"`
	FaceRectangle *FaceRectangle             `json:"faceRectangle,omitempty"`
	Gender        *FaceDescriptionGenderEnum `json:"gender,omitempty"`
}
