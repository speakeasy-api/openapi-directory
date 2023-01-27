package shared

type GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum string

const (
	GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnumViewTypeUnspecified GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum = "VIEW_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnumStandardView        GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum = "STANDARD_VIEW"
	GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnumMaterializedView    GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum = "MATERIALIZED_VIEW"
)

// GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec
// Specification that applies to database view.
type GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec struct {
	BaseTable *string                                                                `json:"baseTable,omitempty"`
	SQLQuery  *string                                                                `json:"sqlQuery,omitempty"`
	ViewType  *GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum `json:"viewType,omitempty"`
}
