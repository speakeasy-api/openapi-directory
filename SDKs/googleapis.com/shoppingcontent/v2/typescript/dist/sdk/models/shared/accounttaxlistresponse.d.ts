import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";
/**
 * Successful response
 */
export declare class AccounttaxListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of account tax settings.
     */
    nextPageToken?: string;
    resources?: AccountTax[];
}
