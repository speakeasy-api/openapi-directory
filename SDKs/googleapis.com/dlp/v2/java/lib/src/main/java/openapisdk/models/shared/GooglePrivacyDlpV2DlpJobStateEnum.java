package openapisdk.models.shared;


public enum GooglePrivacyDlpV2DlpJobStateEnum {
    JOB_STATE_UNSPECIFIED("JOB_STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    DONE("DONE"),
    CANCELED("CANCELED"),
    FAILED("FAILED"),
    ACTIVE("ACTIVE");

    public final String value;

    private GooglePrivacyDlpV2DlpJobStateEnum(String value) {
        this.value = value;
    }
}
