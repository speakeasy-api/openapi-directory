package shared

type DatabaseEntityEntityTypeEnum string

const (
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeUnspecified     DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_UNSPECIFIED"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeSchema          DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_SCHEMA"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeTable           DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_TABLE"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeColumn          DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_COLUMN"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeConstraint      DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_CONSTRAINT"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeIndex           DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_INDEX"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeTrigger         DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_TRIGGER"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeView            DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_VIEW"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeSequence        DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_SEQUENCE"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeStoredProcedure DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeFunction        DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_FUNCTION"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeSynonym         DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_SYNONYM"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeDatabasePackage DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
	DatabaseEntityEntityTypeEnumDatabaseEntityTypeUdt             DatabaseEntityEntityTypeEnum = "DATABASE_ENTITY_TYPE_UDT"
)

type DatabaseEntityTreeEnum string

const (
	DatabaseEntityTreeEnumTreeTypeUnspecified DatabaseEntityTreeEnum = "TREE_TYPE_UNSPECIFIED"
	DatabaseEntityTreeEnumSource              DatabaseEntityTreeEnum = "SOURCE"
	DatabaseEntityTreeEnumDraft               DatabaseEntityTreeEnum = "DRAFT"
	DatabaseEntityTreeEnumDestination         DatabaseEntityTreeEnum = "DESTINATION"
)

// DatabaseEntity
// The base entity type for all the database related entities The message contains the entity name, the name of its parent, its type and the specific details per its type
type DatabaseEntity struct {
	DatabaseFunction *FunctionEntity               `json:"databaseFunction,omitempty"`
	DatabasePackage  *PackageEntity                `json:"databasePackage,omitempty"`
	EntityType       *DatabaseEntityEntityTypeEnum `json:"entityType,omitempty"`
	Mappings         []EntityMapping               `json:"mappings,omitempty"`
	ParentEntity     *string                       `json:"parentEntity,omitempty"`
	Schema           *SchemaEntity                 `json:"schema,omitempty"`
	Sequence         *SequenceEntity               `json:"sequence,omitempty"`
	ShortName        *string                       `json:"shortName,omitempty"`
	StoredProcedure  *StoredProcedureEntity        `json:"storedProcedure,omitempty"`
	Synonym          *SynonymEntity                `json:"synonym,omitempty"`
	Table            *TableEntity                  `json:"table,omitempty"`
	Tree             *DatabaseEntityTreeEnum       `json:"tree,omitempty"`
	View             *ViewEntity                   `json:"view,omitempty"`
}
