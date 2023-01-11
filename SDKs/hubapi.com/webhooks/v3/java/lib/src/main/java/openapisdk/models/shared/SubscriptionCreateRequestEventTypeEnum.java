package openapisdk.models.shared;


public enum SubscriptionCreateRequestEventTypeEnum {
    CONTACT_PROPERTY_CHANGE("contact.propertyChange"),
    COMPANY_PROPERTY_CHANGE("company.propertyChange"),
    DEAL_PROPERTY_CHANGE("deal.propertyChange"),
    TICKET_PROPERTY_CHANGE("ticket.propertyChange"),
    PRODUCT_PROPERTY_CHANGE("product.propertyChange"),
    LINE_ITEM_PROPERTY_CHANGE("line_item.propertyChange"),
    CONTACT_CREATION("contact.creation"),
    CONTACT_DELETION("contact.deletion"),
    CONTACT_PRIVACY_DELETION("contact.privacyDeletion"),
    COMPANY_CREATION("company.creation"),
    COMPANY_DELETION("company.deletion"),
    DEAL_CREATION("deal.creation"),
    DEAL_DELETION("deal.deletion"),
    TICKET_CREATION("ticket.creation"),
    TICKET_DELETION("ticket.deletion"),
    PRODUCT_CREATION("product.creation"),
    PRODUCT_DELETION("product.deletion"),
    LINE_ITEM_CREATION("line_item.creation"),
    LINE_ITEM_DELETION("line_item.deletion"),
    CONVERSATION_CREATION("conversation.creation"),
    CONVERSATION_DELETION("conversation.deletion"),
    CONVERSATION_NEW_MESSAGE("conversation.newMessage"),
    CONVERSATION_PRIVACY_DELETION("conversation.privacyDeletion"),
    CONVERSATION_PROPERTY_CHANGE("conversation.propertyChange");

    public final String value;

    private SubscriptionCreateRequestEventTypeEnum(String value) {
        this.value = value;
    }
}
