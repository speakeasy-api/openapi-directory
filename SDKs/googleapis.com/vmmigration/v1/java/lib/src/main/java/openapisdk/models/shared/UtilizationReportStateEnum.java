package openapisdk.models.shared;


public enum UtilizationReportStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private UtilizationReportStateEnum(String value) {
        this.value = value;
    }
}
