// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum - The Google Cloud service name.
type GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum string

const (
	GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnumManagingSystemUnspecified GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum = "MANAGING_SYSTEM_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnumManagingSystemDataplex    GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum = "MANAGING_SYSTEM_DATAPLEX"
	GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnumManagingSystemOther       GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum = "MANAGING_SYSTEM_OTHER"
)

func (e GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum) ToPointer() *GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum {
	return &e
}

func (e *GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "MANAGING_SYSTEM_UNSPECIFIED":
		fallthrough
	case "MANAGING_SYSTEM_DATAPLEX":
		fallthrough
	case "MANAGING_SYSTEM_OTHER":
		*e = GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum: %v", v)
	}
}

// GoogleCloudDatacatalogV1beta1TaxonomyService - The source system of the Taxonomy.
type GoogleCloudDatacatalogV1beta1TaxonomyService struct {
	// The service agent for the service.
	Identity *string `json:"identity,omitempty"`
	// The Google Cloud service name.
	Name *GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum `json:"name,omitempty"`
}
