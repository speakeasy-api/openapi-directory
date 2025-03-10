// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetUntaggedImagesOrderByEnum - The ordering. Defaults to newest.
type GetUntaggedImagesOrderByEnum string

const (
	GetUntaggedImagesOrderByEnumNewest GetUntaggedImagesOrderByEnum = "Newest"
	GetUntaggedImagesOrderByEnumOldest GetUntaggedImagesOrderByEnum = "Oldest"
)

func (e GetUntaggedImagesOrderByEnum) ToPointer() *GetUntaggedImagesOrderByEnum {
	return &e
}

func (e *GetUntaggedImagesOrderByEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Newest":
		fallthrough
	case "Oldest":
		*e = GetUntaggedImagesOrderByEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetUntaggedImagesOrderByEnum: %v", v)
	}
}

type GetUntaggedImagesRequest struct {
	// API key.
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
	// The iteration id. Defaults to workspace.
	IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
	// The ordering. Defaults to newest.
	OrderBy *GetUntaggedImagesOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	// The project id.
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	// Number of images to skip before beginning the image batch. Defaults to 0.
	Skip *int `queryParam:"style=form,explode=true,name=skip"`
	// Maximum number of images to return. Defaults to 50, limited to 256.
	Take *int `queryParam:"style=form,explode=true,name=take"`
}

type GetUntaggedImagesResponse struct {
	Body        []byte
	ContentType string
	// Error response
	CustomVisionError *shared.CustomVisionError
	// OK
	Images      []shared.Image
	StatusCode  int
	RawResponse *http.Response
}
