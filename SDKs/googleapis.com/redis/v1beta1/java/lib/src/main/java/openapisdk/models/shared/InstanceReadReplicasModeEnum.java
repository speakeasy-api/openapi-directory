package openapisdk.models.shared;


public enum InstanceReadReplicasModeEnum {
    READ_REPLICAS_MODE_UNSPECIFIED("READ_REPLICAS_MODE_UNSPECIFIED"),
    READ_REPLICAS_DISABLED("READ_REPLICAS_DISABLED"),
    READ_REPLICAS_ENABLED("READ_REPLICAS_ENABLED");

    public final String value;

    private InstanceReadReplicasModeEnum(String value) {
        this.value = value;
    }
}
