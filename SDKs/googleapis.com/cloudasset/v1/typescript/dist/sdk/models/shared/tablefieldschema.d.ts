import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A field in TableSchema.
 */
export declare class TableFieldSchema extends SpeakeasyBase {
    /**
     * The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters.
     */
    field?: string;
    /**
     * Describes the nested schema fields if the type property is set to RECORD.
     */
    fields?: TableFieldSchema[];
    /**
     * The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
     */
    mode?: string;
    /**
     * The field data type. Possible values include * STRING * BYTES * INTEGER * FLOAT * BOOLEAN * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY, * NUMERIC, * BIGNUMERIC, * RECORD (where RECORD indicates that the field contains a nested schema).
     */
    type?: string;
}
