import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User account identifier in the third-party service.
 */
export declare class ExternalAccountIdentifiers extends SpeakeasyBase {
    /**
     * User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.
     */
    externalAccountId?: string;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
     */
    obfuscatedExternalAccountId?: string;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
     */
    obfuscatedExternalProfileId?: string;
}
