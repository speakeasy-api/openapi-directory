import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for Datastore.Rollback.
 */
export declare class RollbackRequest extends SpeakeasyBase {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string;
    /**
     * Required. The transaction identifier, returned by a call to Datastore.BeginTransaction.
     */
    transaction?: string;
}
