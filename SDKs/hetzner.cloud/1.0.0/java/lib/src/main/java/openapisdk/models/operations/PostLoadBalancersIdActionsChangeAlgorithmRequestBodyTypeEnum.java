package openapisdk.models.operations;


public enum PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum {
    ROUND_ROBIN("round_robin"),
    LEAST_CONNECTIONS("least_connections");

    public final String value;

    private PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
