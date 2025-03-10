// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type CredentialEnumPushServiceEnum string

const (
	CredentialEnumPushServiceEnumGcm CredentialEnumPushServiceEnum = "gcm"
	CredentialEnumPushServiceEnumApn CredentialEnumPushServiceEnum = "apn"
	CredentialEnumPushServiceEnumFcm CredentialEnumPushServiceEnum = "fcm"
)

func (e *CredentialEnumPushServiceEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "gcm":
		fallthrough
	case "apn":
		fallthrough
	case "fcm":
		*e = CredentialEnumPushServiceEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for CredentialEnumPushServiceEnum: %s", s)
	}
}
