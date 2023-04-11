import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatus } from "./accountstatus";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch accountstatuses response.
 */
export declare class AccountstatusesCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time.
     */
    accountStatus?: AccountStatus;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
}
