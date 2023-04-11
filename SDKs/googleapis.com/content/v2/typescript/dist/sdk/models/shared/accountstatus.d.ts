import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusAccountLevelIssue } from "./accountstatusaccountlevelissue";
import { AccountStatusDataQualityIssue } from "./accountstatusdataqualityissue";
import { AccountStatusProducts } from "./accountstatusproducts";
/**
 * The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
 */
export declare class AccountStatus extends SpeakeasyBase {
    /**
     * The ID of the account for which the status is reported.
     */
    accountId?: string;
    /**
     * A list of account level issues.
     */
    accountLevelIssues?: AccountStatusAccountLevelIssue[];
    /**
     * DEPRECATED - never populated.
     */
    dataQualityIssues?: AccountStatusDataQualityIssue[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`"
     */
    kind?: string;
    /**
     * List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes.
     */
    products?: AccountStatusProducts[];
    /**
     * Whether the account's website is claimed or not.
     */
    websiteClaimed?: boolean;
}
