// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type BatchCreateContactsRequestSourcesEnum string

const (
	BatchCreateContactsRequestSourcesEnumReadSourceTypeUnspecified   BatchCreateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
	BatchCreateContactsRequestSourcesEnumReadSourceTypeProfile       BatchCreateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
	BatchCreateContactsRequestSourcesEnumReadSourceTypeContact       BatchCreateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
	BatchCreateContactsRequestSourcesEnumReadSourceTypeDomainContact BatchCreateContactsRequestSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)

func (e BatchCreateContactsRequestSourcesEnum) ToPointer() *BatchCreateContactsRequestSourcesEnum {
	return &e
}

func (e *BatchCreateContactsRequestSourcesEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "READ_SOURCE_TYPE_UNSPECIFIED":
		fallthrough
	case "READ_SOURCE_TYPE_PROFILE":
		fallthrough
	case "READ_SOURCE_TYPE_CONTACT":
		fallthrough
	case "READ_SOURCE_TYPE_DOMAIN_CONTACT":
		*e = BatchCreateContactsRequestSourcesEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for BatchCreateContactsRequestSourcesEnum: %v", v)
	}
}

// BatchCreateContactsRequestInput - A request to create a batch of contacts.
type BatchCreateContactsRequestInput struct {
	// Required. The contact to create. Allows up to 200 contacts in a single request.
	Contacts []ContactToCreateInput `json:"contacts,omitempty"`
	// Required. A field mask to restrict which fields on each person are returned in the response. Multiple fields can be specified by separating them with commas. If read mask is left empty, the post-mutate-get is skipped and no data will be returned in the response. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
	ReadMask *string `json:"readMask,omitempty"`
	// Optional. A mask of what source types to return in the post mutate read. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
	Sources []BatchCreateContactsRequestSourcesEnum `json:"sources,omitempty"`
}
