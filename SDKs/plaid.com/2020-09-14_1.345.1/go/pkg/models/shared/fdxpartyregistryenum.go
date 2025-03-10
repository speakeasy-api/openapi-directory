// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// FDXPartyRegistryEnum - The registry containing the party’s registration with name and id
type FDXPartyRegistryEnum string

const (
	FDXPartyRegistryEnumFdx     FDXPartyRegistryEnum = "FDX"
	FDXPartyRegistryEnumGleif   FDXPartyRegistryEnum = "GLEIF"
	FDXPartyRegistryEnumIcann   FDXPartyRegistryEnum = "ICANN"
	FDXPartyRegistryEnumPrivate FDXPartyRegistryEnum = "PRIVATE"
)

func (e FDXPartyRegistryEnum) ToPointer() *FDXPartyRegistryEnum {
	return &e
}

func (e *FDXPartyRegistryEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "FDX":
		fallthrough
	case "GLEIF":
		fallthrough
	case "ICANN":
		fallthrough
	case "PRIVATE":
		*e = FDXPartyRegistryEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for FDXPartyRegistryEnum: %v", v)
	}
}
