package openapisdk.models.shared;


public enum GooglePrivacyDlpV2JobTriggerStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    HEALTHY("HEALTHY"),
    PAUSED("PAUSED"),
    CANCELLED("CANCELLED");

    public final String value;

    private GooglePrivacyDlpV2JobTriggerStatusEnum(String value) {
        this.value = value;
    }
}
