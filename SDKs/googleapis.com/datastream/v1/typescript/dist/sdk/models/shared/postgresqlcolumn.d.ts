import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PostgreSQL Column.
 */
export declare class PostgresqlColumn extends SpeakeasyBase {
    /**
     * Column name.
     */
    column?: string;
    /**
     * The PostgreSQL data type.
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
     * Column precision.
     */
    precision?: number;
    /**
     * Whether or not the column represents a primary key.
     */
    primaryKey?: boolean;
    /**
     * Column scale.
     */
    scale?: number;
}
