package shared

type BackendMetastoreMetastoreTypeEnum string

const (
	BackendMetastoreMetastoreTypeEnumMetastoreTypeUnspecified BackendMetastoreMetastoreTypeEnum = "METASTORE_TYPE_UNSPECIFIED"
	BackendMetastoreMetastoreTypeEnumDataprocMetastore        BackendMetastoreMetastoreTypeEnum = "DATAPROC_METASTORE"
)

type BackendMetastore struct {
	MetastoreType *BackendMetastoreMetastoreTypeEnum `json:"metastoreType,omitempty"`
	Name          *string                            `json:"name,omitempty"`
}
