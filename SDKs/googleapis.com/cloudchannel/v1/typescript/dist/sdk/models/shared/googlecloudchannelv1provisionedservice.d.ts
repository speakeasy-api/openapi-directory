import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Service provisioned for an entitlement.
 */
export declare class GoogleCloudChannelV1ProvisionedService extends SpeakeasyBase {
    /**
     * Output only. The product pertaining to the provisioning resource as specified in the Offer.
     */
    productId?: string;
    /**
     * Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud Platform, this is the Billing Account ID of the billing subaccount."
     */
    provisioningId?: string;
    /**
     * Output only. The SKU pertaining to the provisioning resource as specified in the Offer.
     */
    skuId?: string;
}
