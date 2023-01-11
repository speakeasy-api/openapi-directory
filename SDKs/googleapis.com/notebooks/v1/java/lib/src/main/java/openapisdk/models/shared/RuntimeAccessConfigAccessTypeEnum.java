package openapisdk.models.shared;


public enum RuntimeAccessConfigAccessTypeEnum {
    RUNTIME_ACCESS_TYPE_UNSPECIFIED("RUNTIME_ACCESS_TYPE_UNSPECIFIED"),
    SINGLE_USER("SINGLE_USER"),
    SERVICE_ACCOUNT("SERVICE_ACCOUNT");

    public final String value;

    private RuntimeAccessConfigAccessTypeEnum(String value) {
        this.value = value;
    }
}
