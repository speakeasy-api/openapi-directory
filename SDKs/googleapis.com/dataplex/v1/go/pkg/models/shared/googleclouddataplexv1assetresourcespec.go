package shared

type GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum string

const (
	GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnumAccessModeUnspecified GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum = "ACCESS_MODE_UNSPECIFIED"
	GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnumDirect                GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum = "DIRECT"
	GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnumManaged               GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum = "MANAGED"
)

type GoogleCloudDataplexV1AssetResourceSpecTypeEnum string

const (
	GoogleCloudDataplexV1AssetResourceSpecTypeEnumTypeUnspecified GoogleCloudDataplexV1AssetResourceSpecTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1AssetResourceSpecTypeEnumStorageBucket   GoogleCloudDataplexV1AssetResourceSpecTypeEnum = "STORAGE_BUCKET"
	GoogleCloudDataplexV1AssetResourceSpecTypeEnumBigqueryDataset GoogleCloudDataplexV1AssetResourceSpecTypeEnum = "BIGQUERY_DATASET"
)

// GoogleCloudDataplexV1AssetResourceSpec
// Identifies the cloud resource that is referenced by this asset.
type GoogleCloudDataplexV1AssetResourceSpec struct {
	Name           *string                                                   `json:"name,omitempty"`
	ReadAccessMode *GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum `json:"readAccessMode,omitempty"`
	Type           *GoogleCloudDataplexV1AssetResourceSpecTypeEnum           `json:"type,omitempty"`
}
