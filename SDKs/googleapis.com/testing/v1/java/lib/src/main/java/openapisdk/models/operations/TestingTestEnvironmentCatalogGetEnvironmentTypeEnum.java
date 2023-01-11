package openapisdk.models.operations;


public enum TestingTestEnvironmentCatalogGetEnvironmentTypeEnum {
    ENVIRONMENT_TYPE_UNSPECIFIED("ENVIRONMENT_TYPE_UNSPECIFIED"),
    ANDROID("ANDROID"),
    IOS("IOS"),
    NETWORK_CONFIGURATION("NETWORK_CONFIGURATION"),
    PROVIDED_SOFTWARE("PROVIDED_SOFTWARE"),
    DEVICE_IP_BLOCKS("DEVICE_IP_BLOCKS");

    public final String value;

    private TestingTestEnvironmentCatalogGetEnvironmentTypeEnum(String value) {
        this.value = value;
    }
}
