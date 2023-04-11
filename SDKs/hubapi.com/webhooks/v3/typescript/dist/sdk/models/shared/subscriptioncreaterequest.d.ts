import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
 */
export declare enum SubscriptionCreateRequestEventTypeEnum {
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
 * New webhook settings for an app.
 */
export declare class SubscriptionCreateRequest extends SpeakeasyBase {
    /**
     * Determines if the subscription is active or paused. Defaults to false.
     */
    active?: boolean;
    /**
     * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
     */
    eventType: SubscriptionCreateRequestEventTypeEnum;
    /**
     * The internal name of the property to monitor for changes. Only applies when `eventType` is `propertyChange`.
     */
    propertyName?: string;
}
