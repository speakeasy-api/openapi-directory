// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// IDNumberTypeEnum - A globally unique and human readable ID type, specific to the country and document category. For more context on this field, see [Hybrid Input Validation](https://plaid.com/docs/identity-verification/hybrid-input-validation).
type IDNumberTypeEnum string

const (
	IDNumberTypeEnumArDni            IDNumberTypeEnum = "ar_dni"
	IDNumberTypeEnumAuDriversLicense IDNumberTypeEnum = "au_drivers_license"
	IDNumberTypeEnumAuPassport       IDNumberTypeEnum = "au_passport"
	IDNumberTypeEnumBrCpf            IDNumberTypeEnum = "br_cpf"
	IDNumberTypeEnumCaSin            IDNumberTypeEnum = "ca_sin"
	IDNumberTypeEnumClRun            IDNumberTypeEnum = "cl_run"
	IDNumberTypeEnumCnResidentCard   IDNumberTypeEnum = "cn_resident_card"
	IDNumberTypeEnumCoNit            IDNumberTypeEnum = "co_nit"
	IDNumberTypeEnumDkCpr            IDNumberTypeEnum = "dk_cpr"
	IDNumberTypeEnumEgNationalID     IDNumberTypeEnum = "eg_national_id"
	IDNumberTypeEnumEsDni            IDNumberTypeEnum = "es_dni"
	IDNumberTypeEnumEsNie            IDNumberTypeEnum = "es_nie"
	IDNumberTypeEnumHkHkid           IDNumberTypeEnum = "hk_hkid"
	IDNumberTypeEnumInPan            IDNumberTypeEnum = "in_pan"
	IDNumberTypeEnumItCf             IDNumberTypeEnum = "it_cf"
	IDNumberTypeEnumJoCivilID        IDNumberTypeEnum = "jo_civil_id"
	IDNumberTypeEnumJpMyNumber       IDNumberTypeEnum = "jp_my_number"
	IDNumberTypeEnumKeHudumaNamba    IDNumberTypeEnum = "ke_huduma_namba"
	IDNumberTypeEnumKwCivilID        IDNumberTypeEnum = "kw_civil_id"
	IDNumberTypeEnumMxCurp           IDNumberTypeEnum = "mx_curp"
	IDNumberTypeEnumMxRfc            IDNumberTypeEnum = "mx_rfc"
	IDNumberTypeEnumMyNric           IDNumberTypeEnum = "my_nric"
	IDNumberTypeEnumNgNin            IDNumberTypeEnum = "ng_nin"
	IDNumberTypeEnumNzDriversLicense IDNumberTypeEnum = "nz_drivers_license"
	IDNumberTypeEnumOmCivilID        IDNumberTypeEnum = "om_civil_id"
	IDNumberTypeEnumPhPsn            IDNumberTypeEnum = "ph_psn"
	IDNumberTypeEnumPlPesel          IDNumberTypeEnum = "pl_pesel"
	IDNumberTypeEnumRoCnp            IDNumberTypeEnum = "ro_cnp"
	IDNumberTypeEnumSaNationalID     IDNumberTypeEnum = "sa_national_id"
	IDNumberTypeEnumSePin            IDNumberTypeEnum = "se_pin"
	IDNumberTypeEnumSgNric           IDNumberTypeEnum = "sg_nric"
	IDNumberTypeEnumTrTcKimlik       IDNumberTypeEnum = "tr_tc_kimlik"
	IDNumberTypeEnumUsSsn            IDNumberTypeEnum = "us_ssn"
	IDNumberTypeEnumUsSsnLast4       IDNumberTypeEnum = "us_ssn_last_4"
	IDNumberTypeEnumZaSmartID        IDNumberTypeEnum = "za_smart_id"
)

func (e *IDNumberTypeEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "ar_dni":
		fallthrough
	case "au_drivers_license":
		fallthrough
	case "au_passport":
		fallthrough
	case "br_cpf":
		fallthrough
	case "ca_sin":
		fallthrough
	case "cl_run":
		fallthrough
	case "cn_resident_card":
		fallthrough
	case "co_nit":
		fallthrough
	case "dk_cpr":
		fallthrough
	case "eg_national_id":
		fallthrough
	case "es_dni":
		fallthrough
	case "es_nie":
		fallthrough
	case "hk_hkid":
		fallthrough
	case "in_pan":
		fallthrough
	case "it_cf":
		fallthrough
	case "jo_civil_id":
		fallthrough
	case "jp_my_number":
		fallthrough
	case "ke_huduma_namba":
		fallthrough
	case "kw_civil_id":
		fallthrough
	case "mx_curp":
		fallthrough
	case "mx_rfc":
		fallthrough
	case "my_nric":
		fallthrough
	case "ng_nin":
		fallthrough
	case "nz_drivers_license":
		fallthrough
	case "om_civil_id":
		fallthrough
	case "ph_psn":
		fallthrough
	case "pl_pesel":
		fallthrough
	case "ro_cnp":
		fallthrough
	case "sa_national_id":
		fallthrough
	case "se_pin":
		fallthrough
	case "sg_nric":
		fallthrough
	case "tr_tc_kimlik":
		fallthrough
	case "us_ssn":
		fallthrough
	case "us_ssn_last_4":
		fallthrough
	case "za_smart_id":
		*e = IDNumberTypeEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for IDNumberTypeEnum: %s", s)
	}
}
