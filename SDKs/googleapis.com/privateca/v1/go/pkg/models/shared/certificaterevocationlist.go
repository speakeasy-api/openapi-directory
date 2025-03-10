// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CertificateRevocationListStateEnum - Output only. The State for this CertificateRevocationList.
type CertificateRevocationListStateEnum string

const (
	CertificateRevocationListStateEnumStateUnspecified CertificateRevocationListStateEnum = "STATE_UNSPECIFIED"
	CertificateRevocationListStateEnumActive           CertificateRevocationListStateEnum = "ACTIVE"
	CertificateRevocationListStateEnumSuperseded       CertificateRevocationListStateEnum = "SUPERSEDED"
)

func (e CertificateRevocationListStateEnum) ToPointer() *CertificateRevocationListStateEnum {
	return &e
}

func (e *CertificateRevocationListStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "STATE_UNSPECIFIED":
		fallthrough
	case "ACTIVE":
		fallthrough
	case "SUPERSEDED":
		*e = CertificateRevocationListStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CertificateRevocationListStateEnum: %v", v)
	}
}

// CertificateRevocationList - A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
type CertificateRevocationList struct {
	// Output only. The location where 'pem_crl' can be accessed.
	AccessURL *string `json:"accessUrl,omitempty"`
	// Output only. The time at which this CertificateRevocationList was created.
	CreateTime *string `json:"createTime,omitempty"`
	// Optional. Labels with user-defined metadata.
	Labels map[string]string `json:"labels,omitempty"`
	// Output only. The resource name for this CertificateRevocationList in the format `projects/*/locations/*/caPools/*certificateAuthorities/*/ certificateRevocationLists/*`.
	Name *string `json:"name,omitempty"`
	// Output only. The PEM-encoded X.509 CRL.
	PemCrl *string `json:"pemCrl,omitempty"`
	// Output only. The revision ID of this CertificateRevocationList. A new revision is committed whenever a new CRL is published. The format is an 8-character hexadecimal string.
	RevisionID *string `json:"revisionId,omitempty"`
	// Output only. The revoked serial numbers that appear in pem_crl.
	RevokedCertificates []RevokedCertificate `json:"revokedCertificates,omitempty"`
	// Output only. The CRL sequence number that appears in pem_crl.
	SequenceNumber *string `json:"sequenceNumber,omitempty"`
	// Output only. The State for this CertificateRevocationList.
	State *CertificateRevocationListStateEnum `json:"state,omitempty"`
	// Output only. The time at which this CertificateRevocationList was updated.
	UpdateTime *string `json:"updateTime,omitempty"`
}
