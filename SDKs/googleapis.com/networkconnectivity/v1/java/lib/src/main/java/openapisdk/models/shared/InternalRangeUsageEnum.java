package openapisdk.models.shared;


public enum InternalRangeUsageEnum {
    USAGE_UNSPECIFIED("USAGE_UNSPECIFIED"),
    FOR_VPC("FOR_VPC"),
    EXTERNAL_TO_VPC("EXTERNAL_TO_VPC");

    public final String value;

    private InternalRangeUsageEnum(String value) {
        this.value = value;
    }
}
