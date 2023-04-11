import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The data type of the Parameter
 */
export declare enum InputParameterDataTypeEnum {
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
 * Input Parameter message contains metadata about the parameters required for executing an Action.
 */
export declare class InputParameter extends SpeakeasyBase {
    /**
     * The data type of the Parameter
     */
    dataType?: InputParameterDataTypeEnum;
    /**
     * The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
     */
    defaultValue?: any;
    /**
     * A brief description of the Parameter.
     */
    description?: string;
    /**
     * Name of the Parameter.
     */
    name?: string;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean;
}
