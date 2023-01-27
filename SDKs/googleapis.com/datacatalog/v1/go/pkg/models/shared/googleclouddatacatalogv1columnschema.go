package shared

type GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum string

const (
	GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnumIndexingTypeUnspecified GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum = "INDEXING_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnumIndexingTypeNone        GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum = "INDEXING_TYPE_NONE"
	GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnumIndexingTypeNonUnique   GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum = "INDEXING_TYPE_NON_UNIQUE"
	GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnumIndexingTypeUnique      GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum = "INDEXING_TYPE_UNIQUE"
	GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnumIndexingTypePrimaryKey  GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum = "INDEXING_TYPE_PRIMARY_KEY"
)

// GoogleCloudDatacatalogV1ColumnSchema
// A column within a schema. Columns can be nested inside other columns.
type GoogleCloudDatacatalogV1ColumnSchema struct {
	Column              *string                                                      `json:"column,omitempty"`
	DefaultValue        *string                                                      `json:"defaultValue,omitempty"`
	Description         *string                                                      `json:"description,omitempty"`
	GcRule              *string                                                      `json:"gcRule,omitempty"`
	HighestIndexingType *GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum `json:"highestIndexingType,omitempty"`
	LookerColumnSpec    *GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec        `json:"lookerColumnSpec,omitempty"`
	Mode                *string                                                      `json:"mode,omitempty"`
	OrdinalPosition     *int32                                                       `json:"ordinalPosition,omitempty"`
	Subcolumns          []GoogleCloudDatacatalogV1ColumnSchema                       `json:"subcolumns,omitempty"`
	Type                *string                                                      `json:"type,omitempty"`
}
