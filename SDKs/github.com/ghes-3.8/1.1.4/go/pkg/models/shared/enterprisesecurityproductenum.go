// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// EnterpriseSecurityProductEnum - The security feature to enable or disable.
type EnterpriseSecurityProductEnum string

const (
	EnterpriseSecurityProductEnumAdvancedSecurity             EnterpriseSecurityProductEnum = "advanced_security"
	EnterpriseSecurityProductEnumSecretScanning               EnterpriseSecurityProductEnum = "secret_scanning"
	EnterpriseSecurityProductEnumSecretScanningPushProtection EnterpriseSecurityProductEnum = "secret_scanning_push_protection"
)

func (e EnterpriseSecurityProductEnum) ToPointer() *EnterpriseSecurityProductEnum {
	return &e
}

func (e *EnterpriseSecurityProductEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "advanced_security":
		fallthrough
	case "secret_scanning":
		fallthrough
	case "secret_scanning_push_protection":
		*e = EnterpriseSecurityProductEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for EnterpriseSecurityProductEnum: %v", v)
	}
}
