import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for Firestore.Rollback.
 */
export declare class RollbackRequest extends SpeakeasyBase {
    /**
     * Required. The transaction to roll back.
     */
    transaction?: string;
}
