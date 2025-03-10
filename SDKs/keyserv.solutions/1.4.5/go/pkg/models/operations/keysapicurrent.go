// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"bytes"
	"encoding/json"
	"errors"
	"net/http"
	"openapi/pkg/models/shared"
)

type KeysAPICurrentRequest struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type KeysAPICurrent200ApplicationJSONType string

const (
	KeysAPICurrent200ApplicationJSONTypeCurrentKey KeysAPICurrent200ApplicationJSONType = "CurrentKey"
)

type KeysAPICurrent200ApplicationJSON struct {
	CurrentKey *shared.CurrentKey

	Type KeysAPICurrent200ApplicationJSONType
}

func CreateKeysAPICurrent200ApplicationJSONCurrentKey(currentKey shared.CurrentKey) KeysAPICurrent200ApplicationJSON {
	typ := KeysAPICurrent200ApplicationJSONTypeCurrentKey

	return KeysAPICurrent200ApplicationJSON{
		CurrentKey: &currentKey,
		Type:       typ,
	}
}

func (u *KeysAPICurrent200ApplicationJSON) UnmarshalJSON(data []byte) error {
	var d *json.Decoder

	currentKey := new(shared.CurrentKey)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&currentKey); err == nil {
		u.CurrentKey = currentKey
		u.Type = KeysAPICurrent200ApplicationJSONTypeCurrentKey
		return nil
	}

	return errors.New("could not unmarshal into supported union types")
}

func (u KeysAPICurrent200ApplicationJSON) MarshalJSON() ([]byte, error) {
	if u.CurrentKey != nil {
		return json.Marshal(u.CurrentKey)
	}

	return nil, nil
}

type KeysAPICurrentResponse struct {
	ContentType                           string
	KeysAPICurrent200ApplicationJSONOneOf *KeysAPICurrent200ApplicationJSON
	StatusCode                            int
	RawResponse                           *http.Response
}
