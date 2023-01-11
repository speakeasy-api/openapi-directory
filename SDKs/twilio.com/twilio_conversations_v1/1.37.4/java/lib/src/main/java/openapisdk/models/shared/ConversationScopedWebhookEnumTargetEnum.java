package openapisdk.models.shared;


public enum ConversationScopedWebhookEnumTargetEnum {
    WEBHOOK("webhook"),
    TRIGGER("trigger"),
    STUDIO("studio");

    public final String value;

    private ConversationScopedWebhookEnumTargetEnum(String value) {
        this.value = value;
    }
}
