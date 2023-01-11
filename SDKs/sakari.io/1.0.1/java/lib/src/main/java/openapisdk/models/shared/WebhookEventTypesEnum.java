package openapisdk.models.shared;


public enum WebhookEventTypesEnum {
    MESSAGE_RECEIVED("message-received"),
    MESSAGE_STATUS("message-status"),
    MESSAGE_SENT("message-sent"),
    CONVERSATION_CLOSED("conversation-closed"),
    CONTACT_CREATED("contact-created"),
    CONTACT_UPDATED("contact-updated"),
    CONTACT_REMOVED("contact-removed");

    public final String value;

    private WebhookEventTypesEnum(String value) {
        this.value = value;
    }
}
