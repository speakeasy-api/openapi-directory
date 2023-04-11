import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountGoogleMyBusinessLink extends SpeakeasyBase {
    /**
     * The ID of the Business Profile. If this is provided, then `gmbEmail` is ignored. The value of this field should match the `accountId` used by the Business Profile API.
     */
    gmbAccountId?: string;
    /**
     * The Business Profile email address of a specific account within a Business Profile. A sample account within a Business Profile could be a business account with set of locations, managed under the Business Profile.
     */
    gmbEmail?: string;
    /**
     * Status of the link between this Merchant Center account and the Business Profile. Acceptable values are: - "`active`" - "`pending`"
     */
    status?: string;
}
