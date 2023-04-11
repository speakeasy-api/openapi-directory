import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for Datastore.Rollback.
 */
export declare class RollbackRequest extends SpeakeasyBase {
    /**
     * Required. The transaction identifier, returned by a call to Datastore.BeginTransaction.
     */
    transaction?: string;
}
