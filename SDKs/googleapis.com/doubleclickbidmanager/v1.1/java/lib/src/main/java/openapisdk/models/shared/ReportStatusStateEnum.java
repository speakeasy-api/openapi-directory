package openapisdk.models.shared;


public enum ReportStatusStateEnum {
    RUNNING("RUNNING"),
    DONE("DONE"),
    FAILED("FAILED");

    public final String value;

    private ReportStatusStateEnum(String value) {
        this.value = value;
    }
}
