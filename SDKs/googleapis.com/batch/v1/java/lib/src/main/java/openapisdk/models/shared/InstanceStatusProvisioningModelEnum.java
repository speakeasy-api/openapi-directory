package openapisdk.models.shared;


public enum InstanceStatusProvisioningModelEnum {
    PROVISIONING_MODEL_UNSPECIFIED("PROVISIONING_MODEL_UNSPECIFIED"),
    STANDARD("STANDARD"),
    SPOT("SPOT"),
    PREEMPTIBLE("PREEMPTIBLE");

    public final String value;

    private InstanceStatusProvisioningModelEnum(String value) {
        this.value = value;
    }
}
