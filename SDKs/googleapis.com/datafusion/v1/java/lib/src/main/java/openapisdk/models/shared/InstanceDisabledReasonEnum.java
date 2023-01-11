package openapisdk.models.shared;


public enum InstanceDisabledReasonEnum {
    DISABLED_REASON_UNSPECIFIED("DISABLED_REASON_UNSPECIFIED"),
    KMS_KEY_ISSUE("KMS_KEY_ISSUE");

    public final String value;

    private InstanceDisabledReasonEnum(String value) {
        this.value = value;
    }
}
