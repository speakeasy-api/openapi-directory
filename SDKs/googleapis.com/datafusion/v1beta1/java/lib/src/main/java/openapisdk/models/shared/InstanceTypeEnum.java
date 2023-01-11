package openapisdk.models.shared;


public enum InstanceTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    BASIC("BASIC"),
    ENTERPRISE("ENTERPRISE"),
    DEVELOPER("DEVELOPER");

    public final String value;

    private InstanceTypeEnum(String value) {
        this.value = value;
    }
}
