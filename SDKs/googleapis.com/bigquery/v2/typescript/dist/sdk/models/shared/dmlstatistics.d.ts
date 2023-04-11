import { SpeakeasyBase } from "../../../internal/utils";
export declare class DmlStatistics extends SpeakeasyBase {
    /**
     * Number of deleted Rows. populated by DML DELETE, MERGE and TRUNCATE statements.
     */
    deletedRowCount?: string;
    /**
     * Number of inserted Rows. Populated by DML INSERT and MERGE statements.
     */
    insertedRowCount?: string;
    /**
     * Number of updated Rows. Populated by DML UPDATE and MERGE statements.
     */
    updatedRowCount?: string;
}
