import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnFamily } from "./columnfamily";
/**
 * A create, update, or delete of a particular column family.
 */
export declare class Modification extends SpeakeasyBase {
    /**
     * A set of columns within a table which share a common configuration.
     */
    create?: ColumnFamily;
    /**
     * Drop (delete) the column family with the given ID, or fail if no such family exists.
     */
    drop?: boolean;
    /**
     * The ID of the column family to be modified.
     */
    id?: string;
    /**
     * A set of columns within a table which share a common configuration.
     */
    update?: ColumnFamily;
}
