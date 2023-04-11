import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The delivery type for the recipient.
 */
export declare enum RecipientDeliveryTypeEnum {
    Link = "LINK",
    Attachment = "ATTACHMENT"
}
/**
 * Represents a recipient.
 */
export declare class Recipient extends SpeakeasyBase {
    /**
     * The delivery type for the recipient.
     */
    deliveryType?: RecipientDeliveryTypeEnum;
    /**
     * The email address of the recipient.
     */
    email?: string;
    /**
     * The kind of resource this is, in this case dfareporting#recipient.
     */
    kind?: string;
}
