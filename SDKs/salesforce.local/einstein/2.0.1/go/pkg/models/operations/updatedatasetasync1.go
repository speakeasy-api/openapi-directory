// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateDatasetAsync1Security struct {
	BearerToken string `security:"scheme,type=http,subtype=bearer,name=Authorization"`
}

type UpdateDatasetAsync1RequestBody struct {
	// Local .zip file to upload. The maximum .zip file size you can upload from a local drive is 50 MB.
	Data *string `multipartForm:"name=data"`
	// ID of the model that misclassified the images. The feedback examples are added to the dataset associated with this model.
	ModelID *string `multipartForm:"name=modelId"`
}

type UpdateDatasetAsync1Response struct {
	ContentType string
	// Update success
	Dataset     *shared.Dataset
	StatusCode  int
	RawResponse *http.Response
}
