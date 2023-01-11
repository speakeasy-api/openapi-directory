package openapisdk.models.shared;


public enum ScanRunResultStateEnum {
    RESULT_STATE_UNSPECIFIED("RESULT_STATE_UNSPECIFIED"),
    SUCCESS("SUCCESS"),
    ERROR("ERROR"),
    KILLED("KILLED");

    public final String value;

    private ScanRunResultStateEnum(String value) {
        this.value = value;
    }
}
