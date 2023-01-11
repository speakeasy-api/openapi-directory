package openapisdk.models.shared;


public enum MessageCode403AisEnum {
    CONSENT_UNKNOWN("CONSENT_UNKNOWN"),
    SERVICE_BLOCKED("SERVICE_BLOCKED"),
    RESOURCE_UNKNOWN("RESOURCE_UNKNOWN"),
    RESOURCE_EXPIRED("RESOURCE_EXPIRED");

    public final String value;

    private MessageCode403AisEnum(String value) {
        this.value = value;
    }
}
