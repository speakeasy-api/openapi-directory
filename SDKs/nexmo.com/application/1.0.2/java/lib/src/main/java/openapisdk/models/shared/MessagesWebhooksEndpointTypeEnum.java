package openapisdk.models.shared;


public enum MessagesWebhooksEndpointTypeEnum {
    INBOUND_URL("inbound_url"),
    STATUS_URL("status_url");

    public final String value;

    private MessagesWebhooksEndpointTypeEnum(String value) {
        this.value = value;
    }
}
