import { SpeakeasyBase } from "../../../internal/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { OrderContact } from "./ordercontact";
/**
 * Describes properties of a Planning order.
 */
export declare class Order extends SpeakeasyBase {
    /**
     * Account ID of this order.
     */
    accountId?: string;
    /**
     * Advertiser ID of this order.
     */
    advertiserId?: string;
    /**
     * IDs for users that have to approve documents created for this order.
     */
    approverUserProfileIds?: string[];
    /**
     * Buyer invoice ID associated with this order.
     */
    buyerInvoiceId?: string;
    /**
     * Name of the buyer organization.
     */
    buyerOrganizationName?: string;
    /**
     * Comments in this order.
     */
    comments?: string;
    /**
     * Contacts for this order.
     */
    contacts?: OrderContact[];
    /**
     * ID of this order. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#order".
     */
    kind?: string;
    /**
     * Modification timestamp.
     */
    lastModifiedInfo?: LastModifiedInfo;
    /**
     * Name of this order.
     */
    name?: string;
    /**
     * Notes of this order.
     */
    notes?: string;
    /**
     * ID of the terms and conditions template used in this order.
     */
    planningTermId?: string;
    /**
     * Project ID of this order.
     */
    projectId?: string;
    /**
     * Seller order ID associated with this order.
     */
    sellerOrderId?: string;
    /**
     * Name of the seller organization.
     */
    sellerOrganizationName?: string;
    /**
     * Site IDs this order is associated with.
     */
    siteId?: string[];
    /**
     * Free-form site names this order is associated with.
     */
    siteNames?: string[];
    /**
     * Subaccount ID of this order.
     */
    subaccountId?: string;
    /**
     * Terms and conditions of this order.
     */
    termsAndConditions?: string;
}
