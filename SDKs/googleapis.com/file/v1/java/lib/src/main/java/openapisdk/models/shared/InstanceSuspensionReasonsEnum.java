package openapisdk.models.shared;


public enum InstanceSuspensionReasonsEnum {
    SUSPENSION_REASON_UNSPECIFIED("SUSPENSION_REASON_UNSPECIFIED"),
    KMS_KEY_ISSUE("KMS_KEY_ISSUE");

    public final String value;

    private InstanceSuspensionReasonsEnum(String value) {
        this.value = value;
    }
}
