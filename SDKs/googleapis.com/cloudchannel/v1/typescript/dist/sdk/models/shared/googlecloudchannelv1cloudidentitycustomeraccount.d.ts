import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.
 */
export declare class GoogleCloudChannelV1CloudIdentityCustomerAccount extends SpeakeasyBase {
    /**
     * If existing = true, the Cloud Identity ID of the customer.
     */
    customerCloudIdentityId?: string;
    /**
     * If owned = true, the name of the customer that owns the Cloud Identity account. Customer_name uses the format: accounts/{account_id}/customers/{customer_id}
     */
    customerName?: string;
    /**
     * Returns true if a Cloud Identity account exists for a specific domain.
     */
    existing?: boolean;
    /**
     * Returns true if the Cloud Identity account is associated with a customer of the Channel Services partner.
     */
    owned?: boolean;
}
