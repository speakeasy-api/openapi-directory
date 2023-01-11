package openapisdk.models.shared;


public enum VoiceWebhooksEndpointTypeEnum {
    ANSWER_URL("answer_url"),
    EVENT_URL("event_url");

    public final String value;

    private VoiceWebhooksEndpointTypeEnum(String value) {
        this.value = value;
    }
}
