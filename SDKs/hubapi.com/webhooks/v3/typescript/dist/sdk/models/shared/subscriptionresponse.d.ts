import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
 */
export declare enum SubscriptionResponseEventTypeEnum {
    ContactPropertyChange = "contact.propertyChange",
    CompanyPropertyChange = "company.propertyChange",
    DealPropertyChange = "deal.propertyChange",
    TicketPropertyChange = "ticket.propertyChange",
    ProductPropertyChange = "product.propertyChange",
    LineItemPropertyChange = "line_item.propertyChange",
    ContactCreation = "contact.creation",
    ContactDeletion = "contact.deletion",
    ContactPrivacyDeletion = "contact.privacyDeletion",
    CompanyCreation = "company.creation",
    CompanyDeletion = "company.deletion",
    DealCreation = "deal.creation",
    DealDeletion = "deal.deletion",
    TicketCreation = "ticket.creation",
    TicketDeletion = "ticket.deletion",
    ProductCreation = "product.creation",
    ProductDeletion = "product.deletion",
    LineItemCreation = "line_item.creation",
    LineItemDeletion = "line_item.deletion",
    ConversationCreation = "conversation.creation",
    ConversationDeletion = "conversation.deletion",
    ConversationNewMessage = "conversation.newMessage",
    ConversationPrivacyDeletion = "conversation.privacyDeletion",
    ConversationPropertyChange = "conversation.propertyChange"
}
/**
 * Complete details for an event subscription.
 */
export declare class SubscriptionResponse extends SpeakeasyBase {
    /**
     * Determines if the subscription is active or paused.
     */
    active: boolean;
    /**
     * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
     */
    createdAt: Date;
    /**
     * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
     */
    eventType: SubscriptionResponseEventTypeEnum;
    /**
     * The unique ID of the subscription.
     */
    id: string;
    /**
     * The internal name of the property being monitored for changes. Only applies when `eventType` is `propertyChange`.
     */
    propertyName?: string;
    /**
     * When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#).
     */
    updatedAt?: Date;
}
