package openapisdk.models.shared;


public enum ReportStatusStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    QUEUED("QUEUED"),
    RUNNING("RUNNING"),
    DONE("DONE"),
    FAILED("FAILED");

    public final String value;

    private ReportStatusStateEnum(String value) {
        this.value = value;
    }
}
