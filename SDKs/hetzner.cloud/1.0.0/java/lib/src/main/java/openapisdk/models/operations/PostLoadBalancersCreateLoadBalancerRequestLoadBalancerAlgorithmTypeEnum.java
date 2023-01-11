package openapisdk.models.operations;


public enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum {
    ROUND_ROBIN("round_robin"),
    LEAST_CONNECTIONS("least_connections");

    public final String value;

    private PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum(String value) {
        this.value = value;
    }
}
