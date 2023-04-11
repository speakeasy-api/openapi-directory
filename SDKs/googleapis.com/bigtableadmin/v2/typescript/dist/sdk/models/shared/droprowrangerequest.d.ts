import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange
 */
export declare class DropRowRangeRequest extends SpeakeasyBase {
    /**
     * Delete all rows in the table. Setting this to false is a no-op.
     */
    deleteAllDataFromTable?: boolean;
    /**
     * Delete all rows that start with this row key prefix. Prefix cannot be zero length.
     */
    rowKeyPrefix?: string;
}
