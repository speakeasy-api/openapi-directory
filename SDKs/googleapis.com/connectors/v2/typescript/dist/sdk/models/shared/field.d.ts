import { SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
/**
 * The data type of the Field.
 */
export declare enum FieldDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Int = "INT",
    Smallint = "SMALLINT",
    Double = "DOUBLE",
    Date = "DATE",
    Datetime = "DATETIME",
    Time = "TIME",
    String = "STRING",
    Long = "LONG",
    Boolean = "BOOLEAN",
    Decimal = "DECIMAL",
    Uuid = "UUID",
    Blob = "BLOB",
    Bit = "BIT",
    Tinyint = "TINYINT",
    Integer = "INTEGER",
    Bigint = "BIGINT",
    Float = "FLOAT",
    Real = "REAL",
    Numeric = "NUMERIC",
    Char = "CHAR",
    Varchar = "VARCHAR",
    Longvarchar = "LONGVARCHAR",
    Timestamp = "TIMESTAMP",
    Nchar = "NCHAR",
    Nvarchar = "NVARCHAR",
    Longnvarchar = "LONGNVARCHAR",
    Null = "NULL",
    Other = "OTHER",
    JavaObject = "JAVA_OBJECT",
    Distinct = "DISTINCT",
    Struct = "STRUCT",
    Array = "ARRAY",
    Clob = "CLOB",
    Ref = "REF",
    Datalink = "DATALINK",
    Rowid = "ROWID",
    Binary = "BINARY",
    Varbinary = "VARBINARY",
    Longvarbinary = "LONGVARBINARY",
    Nclob = "NCLOB",
    Sqlxml = "SQLXML",
    RefCursor = "REF_CURSOR",
    TimeWithTimezone = "TIME_WITH_TIMEZONE",
    TimestampWithTimezone = "TIMESTAMP_WITH_TIMEZONE"
}
/**
 * Message contains EntityType's Field metadata.
 */
export declare class Field extends SpeakeasyBase {
    /**
     * The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields.
     */
    additionalDetails?: Record<string, any>;
    /**
     * The data type of the Field.
     */
    dataType?: FieldDataTypeEnum;
    /**
     * The following field specifies the default value of the Field provided by the external system if a value is not provided.
     */
    defaultValue?: any;
    /**
     * A brief description of the Field.
     */
    description?: string;
    /**
     * The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity.
     */
    key?: boolean;
    /**
     * Name of the Field.
     */
    name?: string;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean;
    reference?: Reference;
}
