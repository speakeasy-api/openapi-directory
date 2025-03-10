// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type DiscoverableParticipantDocumentTypesEnum string

const (
	DiscoverableParticipantDocumentTypesEnumInvoice         DiscoverableParticipantDocumentTypesEnum = "invoice"
	DiscoverableParticipantDocumentTypesEnumCreditnote      DiscoverableParticipantDocumentTypesEnum = "creditnote"
	DiscoverableParticipantDocumentTypesEnumInvoiceResponse DiscoverableParticipantDocumentTypesEnum = "invoice_response"
	DiscoverableParticipantDocumentTypesEnumOrder           DiscoverableParticipantDocumentTypesEnum = "order"
	DiscoverableParticipantDocumentTypesEnumOrdering        DiscoverableParticipantDocumentTypesEnum = "ordering"
	DiscoverableParticipantDocumentTypesEnumOrderResponse   DiscoverableParticipantDocumentTypesEnum = "order_response"
)

func (e *DiscoverableParticipantDocumentTypesEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "invoice":
		fallthrough
	case "creditnote":
		fallthrough
	case "invoice_response":
		fallthrough
	case "order":
		fallthrough
	case "ordering":
		fallthrough
	case "order_response":
		*e = DiscoverableParticipantDocumentTypesEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for DiscoverableParticipantDocumentTypesEnum: %s", s)
	}
}

// DiscoverableParticipant - A participant to be discovered.
type DiscoverableParticipant struct {
	// An array of document types to discover. The default is '["invoice", "creditnote"]'. This is ignored when only checking existence.
	DocumentTypes []DiscoverableParticipantDocumentTypesEnum `json:"documentTypes,omitempty"`
	// The actual identifier.
	Identifier string `json:"identifier"`
	// The meta scheme of the identifier. For Peppol this is always 'iso6523-actorid-upis'.
	MetaScheme *string `json:"metaScheme,omitempty"`
	// The network to check. Currently only 'peppol' is supported.
	Network *string `json:"network,omitempty"`
	// The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.
	Scheme string `json:"scheme"`
}
