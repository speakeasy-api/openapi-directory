import { SpeakeasyBase } from "../../../internal/utils";
import { Subaccount } from "./subaccount";
/**
 * Subaccount List Response
 */
export declare class SubaccountsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Subaccount collection.
     */
    subaccounts?: Subaccount[];
}
