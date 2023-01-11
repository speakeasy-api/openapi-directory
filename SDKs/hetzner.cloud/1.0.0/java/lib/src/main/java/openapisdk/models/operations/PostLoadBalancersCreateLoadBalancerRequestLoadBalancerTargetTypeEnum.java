package openapisdk.models.operations;


public enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum {
    SERVER("server"),
    LABEL_SELECTOR("label_selector"),
    IP("ip");

    public final String value;

    private PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum(String value) {
        this.value = value;
    }
}
