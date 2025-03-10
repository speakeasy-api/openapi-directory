// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CertificateScopeEnum - Immutable. The scope of the certificate.
type CertificateScopeEnum string

const (
	CertificateScopeEnumDefault   CertificateScopeEnum = "DEFAULT"
	CertificateScopeEnumEdgeCache CertificateScopeEnum = "EDGE_CACHE"
)

func (e CertificateScopeEnum) ToPointer() *CertificateScopeEnum {
	return &e
}

func (e *CertificateScopeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DEFAULT":
		fallthrough
	case "EDGE_CACHE":
		*e = CertificateScopeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CertificateScopeEnum: %v", v)
	}
}

// Certificate - Defines TLS certificate.
type Certificate struct {
	// Output only. The creation timestamp of a Certificate.
	CreateTime *string `json:"createTime,omitempty"`
	// One or more paragraphs of text description of a certificate.
	Description *string `json:"description,omitempty"`
	// Output only. The expiry timestamp of a Certificate.
	ExpireTime *string `json:"expireTime,omitempty"`
	// Set of labels associated with a Certificate.
	Labels map[string]string `json:"labels,omitempty"`
	// Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
	Managed *ManagedCertificate `json:"managed,omitempty"`
	// A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*/locations/*/certificates/*`.
	Name *string `json:"name,omitempty"`
	// Output only. The PEM-encoded certificate chain.
	PemCertificate *string `json:"pemCertificate,omitempty"`
	// Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven't been provisioned yet have this field populated with a value of the managed.domains field.
	SanDnsnames []string `json:"sanDnsnames,omitempty"`
	// Immutable. The scope of the certificate.
	Scope *CertificateScopeEnum `json:"scope,omitempty"`
	// Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
	SelfManaged *SelfManagedCertificate `json:"selfManaged,omitempty"`
	// Output only. The last update timestamp of a Certificate.
	UpdateTime *string `json:"updateTime,omitempty"`
}

// CertificateInput - Defines TLS certificate.
type CertificateInput struct {
	// One or more paragraphs of text description of a certificate.
	Description *string `json:"description,omitempty"`
	// Set of labels associated with a Certificate.
	Labels map[string]string `json:"labels,omitempty"`
	// Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
	Managed *ManagedCertificateInput `json:"managed,omitempty"`
	// A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*/locations/*/certificates/*`.
	Name *string `json:"name,omitempty"`
	// Immutable. The scope of the certificate.
	Scope *CertificateScopeEnum `json:"scope,omitempty"`
	// Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
	SelfManaged *SelfManagedCertificate `json:"selfManaged,omitempty"`
}
