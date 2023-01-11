package openapisdk.models.shared;


public enum InstancePolicyProvisioningModelEnum {
    PROVISIONING_MODEL_UNSPECIFIED("PROVISIONING_MODEL_UNSPECIFIED"),
    STANDARD("STANDARD"),
    SPOT("SPOT"),
    PREEMPTIBLE("PREEMPTIBLE");

    public final String value;

    private InstancePolicyProvisioningModelEnum(String value) {
        this.value = value;
    }
}
