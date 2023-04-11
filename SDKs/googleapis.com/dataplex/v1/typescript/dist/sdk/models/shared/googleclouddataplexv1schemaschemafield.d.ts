import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Additional field semantics.
 */
export declare enum GoogleCloudDataplexV1SchemaSchemaFieldModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Required = "REQUIRED",
    Nullable = "NULLABLE",
    Repeated = "REPEATED"
}
/**
 * Required. The type of field.
 */
export declare enum GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Boolean = "BOOLEAN",
    Byte = "BYTE",
    Int16 = "INT16",
    Int32 = "INT32",
    Int64 = "INT64",
    Float = "FLOAT",
    Double = "DOUBLE",
    Decimal = "DECIMAL",
    String = "STRING",
    Binary = "BINARY",
    Timestamp = "TIMESTAMP",
    Date = "DATE",
    Time = "TIME",
    Record = "RECORD",
    Null = "NULL"
}
/**
 * Represents a column field within a table schema.
 */
export declare class GoogleCloudDataplexV1SchemaSchemaField extends SpeakeasyBase {
    /**
     * Optional. User friendly field description. Must be less than or equal to 1024 characters.
     */
    description?: string;
    /**
     * Optional. Any nested field for complex types.
     */
    fields?: GoogleCloudDataplexV1SchemaSchemaField[];
    /**
     * Required. Additional field semantics.
     */
    mode?: GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;
    /**
     * Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore.
     */
    name?: string;
    /**
     * Required. The type of field.
     */
    type?: GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
}
