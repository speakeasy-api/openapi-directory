import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch accounts response.
 */
export declare class AccountsCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
     */
    account?: Account;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`"
     */
    kind?: string;
    /**
     * Deprecated. This field is never set. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
     */
    linkStatus?: string;
}
