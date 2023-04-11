import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinkService extends SpeakeasyBase {
    /**
     * Service provided to or by the linked account. Acceptable values are: - "`shoppingActionsOrderManagement`" - "`shoppingActionsProductManagement`" - "`shoppingAdsProductManagement`" - "`paymentProcessing`"
     */
    service?: string;
    /**
     * Status of the link Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
     */
    status?: string;
}
