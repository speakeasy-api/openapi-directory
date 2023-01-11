package openapisdk.models.shared;


public enum ConfigManagementBinauthzStateWebhookEnum {
    DEPLOYMENT_STATE_UNSPECIFIED("DEPLOYMENT_STATE_UNSPECIFIED"),
    NOT_INSTALLED("NOT_INSTALLED"),
    INSTALLED("INSTALLED"),
    ERROR("ERROR");

    public final String value;

    private ConfigManagementBinauthzStateWebhookEnum(String value) {
        this.value = value;
    }
}
