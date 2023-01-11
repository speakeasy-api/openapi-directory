package openapisdk.models.shared;


public enum UpgradeHistoryEntryStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    STARTED("STARTED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private UpgradeHistoryEntryStateEnum(String value) {
        this.value = value;
    }
}
