import { SpeakeasyBase } from "../../../internal/utils";
import { ECommercePlatformLinkInfo } from "./ecommerceplatformlinkinfo";
import { PaymentServiceProviderLinkInfo } from "./paymentserviceproviderlinkinfo";
export declare class AccountsLinkRequest extends SpeakeasyBase {
    /**
     * Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`"
     */
    action?: string;
    /**
     * Additional information required for E_COMMERCE_PLATFORM link type.
     */
    eCommercePlatformLinkInfo?: ECommercePlatformLinkInfo;
    /**
     * Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`"
     */
    linkType?: string;
    /**
     * The ID of the linked account.
     */
    linkedAccountId?: string;
    /**
     * Additional information required for PAYMENT_SERVICE_PROVIDER link type.
     */
    paymentServiceProviderLinkInfo?: PaymentServiceProviderLinkInfo;
    /**
     *  Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`"
     */
    services?: string[];
}
