package openapisdk.models.shared;


public enum EndpointPolicyTypeEnum {
    ENDPOINT_POLICY_TYPE_UNSPECIFIED("ENDPOINT_POLICY_TYPE_UNSPECIFIED"),
    SIDECAR_PROXY("SIDECAR_PROXY"),
    GRPC_SERVER("GRPC_SERVER");

    public final String value;

    private EndpointPolicyTypeEnum(String value) {
        this.value = value;
    }
}
