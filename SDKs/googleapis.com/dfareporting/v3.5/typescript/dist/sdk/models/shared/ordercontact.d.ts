import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of this contact.
 */
export declare enum OrderContactContactTypeEnum {
    PlanningOrderContactBuyerContact = "PLANNING_ORDER_CONTACT_BUYER_CONTACT",
    PlanningOrderContactBuyerBillingContact = "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT",
    PlanningOrderContactSellerContact = "PLANNING_ORDER_CONTACT_SELLER_CONTACT"
}
/**
 * Contact of an order.
 */
export declare class OrderContact extends SpeakeasyBase {
    /**
     * Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID.
     */
    contactInfo?: string;
    /**
     * Name of this contact.
     */
    contactName?: string;
    /**
     * Title of this contact.
     */
    contactTitle?: string;
    /**
     * Type of this contact.
     */
    contactType?: OrderContactContactTypeEnum;
    /**
     * ID of the user profile containing the signature that will be embedded into order documents.
     */
    signatureUserProfileId?: string;
}
