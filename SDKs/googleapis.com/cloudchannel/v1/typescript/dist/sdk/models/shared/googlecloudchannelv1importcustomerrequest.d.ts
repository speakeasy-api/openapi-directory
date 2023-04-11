import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for CloudChannelService.ImportCustomer
 */
export declare class GoogleCloudChannelV1ImportCustomerRequest extends SpeakeasyBase {
    /**
     * Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.
     */
    authToken?: string;
    /**
     * Optional. Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is required for 2-tier transfer scenarios and can be provided via the request Parent binding as well.
     */
    channelPartnerId?: string;
    /**
     * Required. Customer's Cloud Identity ID
     */
    cloudIdentityId?: string;
    /**
     * Optional. Specifies the customer that will receive imported Cloud Identity information. Format: accounts/{account_id}/customers/{customer_id}
     */
    customer?: string;
    /**
     * Required. Customer domain.
     */
    domain?: string;
    /**
     * Required. Choose to overwrite an existing customer if found. This must be set to true if there is an existing customer with a conflicting region code or domain.
     */
    overwriteIfExists?: boolean;
}
