import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
 */
export declare class CheckConsistencyRequest extends SpeakeasyBase {
    /**
     * Required. The token created using GenerateConsistencyToken for the Table.
     */
    consistencyToken?: string;
}
