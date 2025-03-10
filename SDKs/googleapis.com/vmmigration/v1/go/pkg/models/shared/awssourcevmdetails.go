// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// AwsSourceVMDetailsFirmwareEnum - The firmware type of the source VM.
type AwsSourceVMDetailsFirmwareEnum string

const (
	AwsSourceVMDetailsFirmwareEnumFirmwareUnspecified AwsSourceVMDetailsFirmwareEnum = "FIRMWARE_UNSPECIFIED"
	AwsSourceVMDetailsFirmwareEnumEfi                 AwsSourceVMDetailsFirmwareEnum = "EFI"
	AwsSourceVMDetailsFirmwareEnumBios                AwsSourceVMDetailsFirmwareEnum = "BIOS"
)

func (e AwsSourceVMDetailsFirmwareEnum) ToPointer() *AwsSourceVMDetailsFirmwareEnum {
	return &e
}

func (e *AwsSourceVMDetailsFirmwareEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "FIRMWARE_UNSPECIFIED":
		fallthrough
	case "EFI":
		fallthrough
	case "BIOS":
		*e = AwsSourceVMDetailsFirmwareEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AwsSourceVMDetailsFirmwareEnum: %v", v)
	}
}

// AwsSourceVMDetails - Represent the source AWS VM details.
type AwsSourceVMDetails struct {
	// The total size of the disks being migrated in bytes.
	CommittedStorageBytes *string `json:"committedStorageBytes,omitempty"`
	// The firmware type of the source VM.
	Firmware *AwsSourceVMDetailsFirmwareEnum `json:"firmware,omitempty"`
}
