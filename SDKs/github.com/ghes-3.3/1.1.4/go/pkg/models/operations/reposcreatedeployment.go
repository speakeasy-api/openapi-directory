// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"bytes"
	"encoding/json"
	"errors"
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposCreateDeploymentRequestBodyPayloadType string

const (
	ReposCreateDeploymentRequestBodyPayloadTypeMapOfany ReposCreateDeploymentRequestBodyPayloadType = "mapOfany"
	ReposCreateDeploymentRequestBodyPayloadTypeStr      ReposCreateDeploymentRequestBodyPayloadType = "str"
)

type ReposCreateDeploymentRequestBodyPayload struct {
	MapOfany map[string]interface{}
	Str      *string

	Type ReposCreateDeploymentRequestBodyPayloadType
}

func CreateReposCreateDeploymentRequestBodyPayloadMapOfany(mapOfany map[string]interface{}) ReposCreateDeploymentRequestBodyPayload {
	typ := ReposCreateDeploymentRequestBodyPayloadTypeMapOfany

	return ReposCreateDeploymentRequestBodyPayload{
		MapOfany: mapOfany,
		Type:     typ,
	}
}

func CreateReposCreateDeploymentRequestBodyPayloadStr(str string) ReposCreateDeploymentRequestBodyPayload {
	typ := ReposCreateDeploymentRequestBodyPayloadTypeStr

	return ReposCreateDeploymentRequestBodyPayload{
		Str:  &str,
		Type: typ,
	}
}

func (u *ReposCreateDeploymentRequestBodyPayload) UnmarshalJSON(data []byte) error {
	var d *json.Decoder

	mapOfany := map[string]interface{}{}
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&mapOfany); err == nil {
		u.MapOfany = mapOfany
		u.Type = ReposCreateDeploymentRequestBodyPayloadTypeMapOfany
		return nil
	}

	str := new(string)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&str); err == nil {
		u.Str = str
		u.Type = ReposCreateDeploymentRequestBodyPayloadTypeStr
		return nil
	}

	return errors.New("could not unmarshal into supported union types")
}

func (u ReposCreateDeploymentRequestBodyPayload) MarshalJSON() ([]byte, error) {
	if u.MapOfany != nil {
		return json.Marshal(u.MapOfany)
	}

	if u.Str != nil {
		return json.Marshal(u.Str)
	}

	return nil, nil
}

type ReposCreateDeploymentRequestBody struct {
	// Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
	AutoMerge *bool `json:"auto_merge,omitempty"`
	// Short description of the deployment.
	Description *string `json:"description,omitempty"`
	// Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
	Environment *string                                  `json:"environment,omitempty"`
	Payload     *ReposCreateDeploymentRequestBodyPayload `json:"payload,omitempty"`
	// Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.
	ProductionEnvironment *bool `json:"production_environment,omitempty"`
	// The ref to deploy. This can be a branch, tag, or SHA.
	Ref string `json:"ref"`
	// The [status](https://docs.github.com/enterprise-server@3.3/rest/commits/statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
	RequiredContexts []string `json:"required_contexts,omitempty"`
	// Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
	Task *string `json:"task,omitempty"`
	// Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`
	TransientEnvironment *bool `json:"transient_environment,omitempty"`
}

type ReposCreateDeploymentRequest struct {
	RequestBody ReposCreateDeploymentRequestBody `request:"mediaType=application/json"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

// ReposCreateDeployment202ApplicationJSON - Merged branch response
type ReposCreateDeployment202ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type ReposCreateDeploymentResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	Deployment *shared.Deployment
	// Merged branch response
	ReposCreateDeployment202ApplicationJSONObject *ReposCreateDeployment202ApplicationJSON
	// Validation failed, or the endpoint has been spammed.
	ValidationError *shared.ValidationError
}
