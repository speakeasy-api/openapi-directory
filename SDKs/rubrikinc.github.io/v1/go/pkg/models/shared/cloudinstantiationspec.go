// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type CloudInstantiationSpec struct {
	// Specifies the number of seconds to retain an image file that is generated for a snappable. Setting this to -1 disables cloud instantiation for the snappable.
	//
	ImageRetentionInSeconds int64 `json:"imageRetentionInSeconds"`
}
