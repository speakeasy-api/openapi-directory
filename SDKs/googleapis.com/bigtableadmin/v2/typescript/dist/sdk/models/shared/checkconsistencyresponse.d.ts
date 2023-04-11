import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
 */
export declare class CheckConsistencyResponse extends SpeakeasyBase {
    /**
     * True only if the token is consistent. A token is consistent if replication has caught up with the restrictions specified in the request.
     */
    consistent?: boolean;
}
