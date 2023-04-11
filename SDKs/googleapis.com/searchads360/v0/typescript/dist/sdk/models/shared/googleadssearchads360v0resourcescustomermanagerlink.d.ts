import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the link between the customer and the manager.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCustomerManagerLinkStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING",
    Refused = "REFUSED",
    Canceled = "CANCELED"
}
/**
 * Represents customer-manager link relationship.
 */
export declare class GoogleAdsSearchads360V0ResourcesCustomerManagerLink extends SpeakeasyBase {
    /**
     * Output only. The manager customer linked to the customer.
     */
    managerCustomer?: string;
    /**
     * Output only. ID of the customer-manager link. This field is read only.
     */
    managerLinkId?: string;
    /**
     * Immutable. Name of the resource. CustomerManagerLink resource names have the form: `customers/{customer_id}/customerManagerLinks/{manager_customer_id}~{manager_link_id}`
     */
    resourceName?: string;
    /**
     * Status of the link between the customer and the manager.
     */
    status?: GoogleAdsSearchads360V0ResourcesCustomerManagerLinkStatusEnum;
}
