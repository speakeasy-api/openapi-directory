import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MySQL Column.
 */
export declare class MysqlColumn extends SpeakeasyBase {
    /**
     * Column collation.
     */
    collation?: string;
    /**
     * Column name.
     */
    column?: string;
    /**
     * The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html
     */
    dataType?: string;
    /**
     * Column length.
     */
    length?: number;
    /**
     * Whether or not the column can accept a null value.
     */
    nullable?: boolean;
    /**
     * The ordinal position of the column in the table.
     */
    ordinalPosition?: number;
    /**
     * Whether or not the column represents a primary key.
     */
    primaryKey?: boolean;
}
