import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatus } from "./accountstatus";
/**
 * Successful response
 */
export declare class AccountstatusesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesListResponse`".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of account statuses.
     */
    nextPageToken?: string;
    resources?: AccountStatus[];
}
