package shared

type SynonymEntitySourceTypeEnum string

const (
	SynonymEntitySourceTypeEnumDatabaseEntityTypeUnspecified     SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_UNSPECIFIED"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeSchema          SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_SCHEMA"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeTable           SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_TABLE"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeColumn          SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_COLUMN"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeConstraint      SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_CONSTRAINT"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeIndex           SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_INDEX"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeTrigger         SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_TRIGGER"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeView            SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_VIEW"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeSequence        SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_SEQUENCE"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeStoredProcedure SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeFunction        SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_FUNCTION"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeSynonym         SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_SYNONYM"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeDatabasePackage SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
	SynonymEntitySourceTypeEnumDatabaseEntityTypeUdt             SynonymEntitySourceTypeEnum = "DATABASE_ENTITY_TYPE_UDT"
)

// SynonymEntity
// Synonym's parent is a schema.
type SynonymEntity struct {
	CustomFeatures map[string]interface{}       `json:"customFeatures,omitempty"`
	SourceEntity   *string                      `json:"sourceEntity,omitempty"`
	SourceType     *SynonymEntitySourceTypeEnum `json:"sourceType,omitempty"`
}
