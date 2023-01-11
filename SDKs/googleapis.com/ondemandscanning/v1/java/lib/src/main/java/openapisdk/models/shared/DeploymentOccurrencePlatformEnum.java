package openapisdk.models.shared;


public enum DeploymentOccurrencePlatformEnum {
    PLATFORM_UNSPECIFIED("PLATFORM_UNSPECIFIED"),
    GKE("GKE"),
    FLEX("FLEX"),
    CUSTOM("CUSTOM");

    public final String value;

    private DeploymentOccurrencePlatformEnum(String value) {
        this.value = value;
    }
}
