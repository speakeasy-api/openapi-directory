// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// GoogleCloudDataplexV1LakeStateEnum - Output only. Current state of the lake.
type GoogleCloudDataplexV1LakeStateEnum string

const (
	GoogleCloudDataplexV1LakeStateEnumStateUnspecified GoogleCloudDataplexV1LakeStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1LakeStateEnumActive           GoogleCloudDataplexV1LakeStateEnum = "ACTIVE"
	GoogleCloudDataplexV1LakeStateEnumCreating         GoogleCloudDataplexV1LakeStateEnum = "CREATING"
	GoogleCloudDataplexV1LakeStateEnumDeleting         GoogleCloudDataplexV1LakeStateEnum = "DELETING"
	GoogleCloudDataplexV1LakeStateEnumActionRequired   GoogleCloudDataplexV1LakeStateEnum = "ACTION_REQUIRED"
)

func (e GoogleCloudDataplexV1LakeStateEnum) ToPointer() *GoogleCloudDataplexV1LakeStateEnum {
	return &e
}

func (e *GoogleCloudDataplexV1LakeStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "STATE_UNSPECIFIED":
		fallthrough
	case "ACTIVE":
		fallthrough
	case "CREATING":
		fallthrough
	case "DELETING":
		fallthrough
	case "ACTION_REQUIRED":
		*e = GoogleCloudDataplexV1LakeStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GoogleCloudDataplexV1LakeStateEnum: %v", v)
	}
}

// GoogleCloudDataplexV1Lake - A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
type GoogleCloudDataplexV1Lake struct {
	// Aggregated status of the underlying assets of a lake or zone.
	AssetStatus *GoogleCloudDataplexV1AssetStatus `json:"assetStatus,omitempty"`
	// Output only. The time when the lake was created.
	CreateTime *string `json:"createTime,omitempty"`
	// Optional. Description of the lake.
	Description *string `json:"description,omitempty"`
	// Optional. User friendly display name.
	DisplayName *string `json:"displayName,omitempty"`
	// Optional. User-defined labels for the lake.
	Labels map[string]string `json:"labels,omitempty"`
	// Settings to manage association of Dataproc Metastore with a lake.
	Metastore *GoogleCloudDataplexV1LakeMetastore `json:"metastore,omitempty"`
	// Status of Lake and Dataproc Metastore service instance association.
	MetastoreStatus *GoogleCloudDataplexV1LakeMetastoreStatus `json:"metastoreStatus,omitempty"`
	// Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
	Name *string `json:"name,omitempty"`
	// Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake.
	ServiceAccount *string `json:"serviceAccount,omitempty"`
	// Output only. Current state of the lake.
	State *GoogleCloudDataplexV1LakeStateEnum `json:"state,omitempty"`
	// Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name.
	UID *string `json:"uid,omitempty"`
	// Output only. The time when the lake was last updated.
	UpdateTime *string `json:"updateTime,omitempty"`
}

// GoogleCloudDataplexV1LakeInput - A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
type GoogleCloudDataplexV1LakeInput struct {
	// Aggregated status of the underlying assets of a lake or zone.
	AssetStatus *GoogleCloudDataplexV1AssetStatus `json:"assetStatus,omitempty"`
	// Optional. Description of the lake.
	Description *string `json:"description,omitempty"`
	// Optional. User friendly display name.
	DisplayName *string `json:"displayName,omitempty"`
	// Optional. User-defined labels for the lake.
	Labels map[string]string `json:"labels,omitempty"`
	// Settings to manage association of Dataproc Metastore with a lake.
	Metastore *GoogleCloudDataplexV1LakeMetastore `json:"metastore,omitempty"`
	// Status of Lake and Dataproc Metastore service instance association.
	MetastoreStatus *GoogleCloudDataplexV1LakeMetastoreStatus `json:"metastoreStatus,omitempty"`
}
