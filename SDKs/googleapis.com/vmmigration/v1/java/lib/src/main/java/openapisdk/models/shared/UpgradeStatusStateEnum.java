package openapisdk.models.shared;


public enum UpgradeStatusStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    RUNNING("RUNNING"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED");

    public final String value;

    private UpgradeStatusStateEnum(String value) {
        this.value = value;
    }
}
