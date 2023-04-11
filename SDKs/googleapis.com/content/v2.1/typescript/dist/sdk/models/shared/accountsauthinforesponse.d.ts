import { SpeakeasyBase } from "../../../internal/utils";
import { AccountIdentifier } from "./accountidentifier";
/**
 * Successful response
 */
export declare class AccountsAuthInfoResponse extends SpeakeasyBase {
    /**
     * The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined.
     */
    accountIdentifiers?: AccountIdentifier[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsAuthInfoResponse`".
     */
    kind?: string;
}
