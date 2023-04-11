import { SpeakeasyBase } from "../../../internal/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";
/**
 * Type of this order document
 */
export declare enum OrderDocumentTypeEnum {
    PlanningOrderTypeInsertionOrder = "PLANNING_ORDER_TYPE_INSERTION_ORDER",
    PlanningOrderTypeChangeOrder = "PLANNING_ORDER_TYPE_CHANGE_ORDER"
}
/**
 * Contains properties of a Planning order document.
 */
export declare class OrderDocument extends SpeakeasyBase {
    /**
     * Account ID of this order document.
     */
    accountId?: string;
    /**
     * Advertiser ID of this order document.
     */
    advertiserId?: string;
    /**
     * The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change history can be preserved.
     */
    amendedOrderDocumentId?: string;
    /**
     * IDs of users who have approved this order document.
     */
    approvedByUserProfileIds?: string[];
    /**
     * Whether this order document is cancelled.
     */
    cancelled?: boolean;
    /**
     * Modification timestamp.
     */
    createdInfo?: LastModifiedInfo;
    effectiveDate?: Date;
    /**
     * ID of this order document.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocument".
     */
    kind?: string;
    /**
     * List of email addresses that received the last sent document.
     */
    lastSentRecipients?: string[];
    lastSentTime?: Date;
    /**
     * ID of the order from which this order document is created.
     */
    orderId?: string;
    /**
     * Project ID of this order document.
     */
    projectId?: string;
    /**
     * Whether this order document has been signed.
     */
    signed?: boolean;
    /**
     * Subaccount ID of this order document.
     */
    subaccountId?: string;
    /**
     * Title of this order document.
     */
    title?: string;
    /**
     * Type of this order document
     */
    type?: OrderDocumentTypeEnum;
}
