package openapisdk.models.shared;


public enum CompensationEntryTypeEnum {
    COMPENSATION_TYPE_UNSPECIFIED("COMPENSATION_TYPE_UNSPECIFIED"),
    BASE("BASE"),
    BONUS("BONUS"),
    SIGNING_BONUS("SIGNING_BONUS"),
    EQUITY("EQUITY"),
    PROFIT_SHARING("PROFIT_SHARING"),
    COMMISSIONS("COMMISSIONS"),
    TIPS("TIPS"),
    OTHER_COMPENSATION_TYPE("OTHER_COMPENSATION_TYPE");

    public final String value;

    private CompensationEntryTypeEnum(String value) {
        this.value = value;
    }
}
