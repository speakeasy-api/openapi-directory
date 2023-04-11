import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountGoogleMyBusinessLink extends SpeakeasyBase {
    /**
     * The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a business account with set of locations, managed under the GMB account.
     */
    gmbEmail?: string;
    /**
     * Status of the link between this Merchant Center account and the GMB account. Acceptable values are: - "`active`" - "`pending`"
     */
    status?: string;
}
