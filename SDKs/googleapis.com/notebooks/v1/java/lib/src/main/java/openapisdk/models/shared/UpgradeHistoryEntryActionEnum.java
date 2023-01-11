package openapisdk.models.shared;


public enum UpgradeHistoryEntryActionEnum {
    ACTION_UNSPECIFIED("ACTION_UNSPECIFIED"),
    UPGRADE("UPGRADE"),
    ROLLBACK("ROLLBACK");

    public final String value;

    private UpgradeHistoryEntryActionEnum(String value) {
        this.value = value;
    }
}
