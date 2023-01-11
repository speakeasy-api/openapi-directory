package openapisdk.models.shared;


public enum ResourceGroupResourceTypeEnum {
    RESOURCE_TYPE_UNSPECIFIED("RESOURCE_TYPE_UNSPECIFIED"),
    INSTANCE("INSTANCE"),
    AWS_ELB_LOAD_BALANCER("AWS_ELB_LOAD_BALANCER");

    public final String value;

    private ResourceGroupResourceTypeEnum(String value) {
        this.value = value;
    }
}
