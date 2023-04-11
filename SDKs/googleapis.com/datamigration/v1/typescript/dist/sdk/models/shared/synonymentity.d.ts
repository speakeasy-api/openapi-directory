import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the entity for which the synonym is being created (usually a table or a sequence).
 */
export declare enum SynonymEntitySourceTypeEnum {
    DatabaseEntityTypeUnspecified = "DATABASE_ENTITY_TYPE_UNSPECIFIED",
    DatabaseEntityTypeSchema = "DATABASE_ENTITY_TYPE_SCHEMA",
    DatabaseEntityTypeTable = "DATABASE_ENTITY_TYPE_TABLE",
    DatabaseEntityTypeColumn = "DATABASE_ENTITY_TYPE_COLUMN",
    DatabaseEntityTypeConstraint = "DATABASE_ENTITY_TYPE_CONSTRAINT",
    DatabaseEntityTypeIndex = "DATABASE_ENTITY_TYPE_INDEX",
    DatabaseEntityTypeTrigger = "DATABASE_ENTITY_TYPE_TRIGGER",
    DatabaseEntityTypeView = "DATABASE_ENTITY_TYPE_VIEW",
    DatabaseEntityTypeSequence = "DATABASE_ENTITY_TYPE_SEQUENCE",
    DatabaseEntityTypeStoredProcedure = "DATABASE_ENTITY_TYPE_STORED_PROCEDURE",
    DatabaseEntityTypeFunction = "DATABASE_ENTITY_TYPE_FUNCTION",
    DatabaseEntityTypeSynonym = "DATABASE_ENTITY_TYPE_SYNONYM",
    DatabaseEntityTypeDatabasePackage = "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE",
    DatabaseEntityTypeUdt = "DATABASE_ENTITY_TYPE_UDT",
    DatabaseEntityTypeMaterialView = "DATABASE_ENTITY_TYPE_MATERIAL_VIEW",
    DatabaseEntityTypeDatabase = "DATABASE_ENTITY_TYPE_DATABASE"
}
/**
 * Synonym's parent is a schema.
 */
export declare class SynonymEntity extends SpeakeasyBase {
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * The name of the entity for which the synonym is being created (the source).
     */
    sourceEntity?: string;
    /**
     * The type of the entity for which the synonym is being created (usually a table or a sequence).
     */
    sourceType?: SynonymEntitySourceTypeEnum;
}
