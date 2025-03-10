// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"bytes"
	"encoding/json"
	"errors"
)

type CreateManifestRequestBodyType string

const (
	CreateManifestRequestBodyTypeCreateManifestByObjectRequestBody CreateManifestRequestBodyType = "create_manifest_by_object_request_body"
	CreateManifestRequestBodyTypeCreateManifestLabelIdsRequestBody CreateManifestRequestBodyType = "create_manifest_label_ids_request_body"
)

type CreateManifestRequestBody struct {
	CreateManifestByObjectRequestBody *CreateManifestByObjectRequestBody
	CreateManifestLabelIdsRequestBody *CreateManifestLabelIdsRequestBody

	Type CreateManifestRequestBodyType
}

func CreateCreateManifestRequestBodyCreateManifestByObjectRequestBody(createManifestByObjectRequestBody CreateManifestByObjectRequestBody) CreateManifestRequestBody {
	typ := CreateManifestRequestBodyTypeCreateManifestByObjectRequestBody

	return CreateManifestRequestBody{
		CreateManifestByObjectRequestBody: &createManifestByObjectRequestBody,
		Type:                              typ,
	}
}

func CreateCreateManifestRequestBodyCreateManifestLabelIdsRequestBody(createManifestLabelIdsRequestBody CreateManifestLabelIdsRequestBody) CreateManifestRequestBody {
	typ := CreateManifestRequestBodyTypeCreateManifestLabelIdsRequestBody

	return CreateManifestRequestBody{
		CreateManifestLabelIdsRequestBody: &createManifestLabelIdsRequestBody,
		Type:                              typ,
	}
}

func (u *CreateManifestRequestBody) UnmarshalJSON(data []byte) error {
	var d *json.Decoder

	createManifestByObjectRequestBody := new(CreateManifestByObjectRequestBody)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&createManifestByObjectRequestBody); err == nil {
		u.CreateManifestByObjectRequestBody = createManifestByObjectRequestBody
		u.Type = CreateManifestRequestBodyTypeCreateManifestByObjectRequestBody
		return nil
	}

	createManifestLabelIdsRequestBody := new(CreateManifestLabelIdsRequestBody)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&createManifestLabelIdsRequestBody); err == nil {
		u.CreateManifestLabelIdsRequestBody = createManifestLabelIdsRequestBody
		u.Type = CreateManifestRequestBodyTypeCreateManifestLabelIdsRequestBody
		return nil
	}

	return errors.New("could not unmarshal into supported union types")
}

func (u CreateManifestRequestBody) MarshalJSON() ([]byte, error) {
	if u.CreateManifestByObjectRequestBody != nil {
		return json.Marshal(u.CreateManifestByObjectRequestBody)
	}

	if u.CreateManifestLabelIdsRequestBody != nil {
		return json.Marshal(u.CreateManifestLabelIdsRequestBody)
	}

	return nil, nil
}
