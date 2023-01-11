package openapisdk.models.shared;


public enum PensionPensionRoundingOptionEnum {
    NOT_SET("NotSet"),
    PENNY_UP("PennyUp"),
    PENNY_DOWN("PennyDown"),
    BANKERS("Bankers"),
    FIVE_UP("FiveUp"),
    FIVE_DOWN("FiveDown"),
    FLOOR("Floor"),
    CEILING("Ceiling");

    public final String value;

    private PensionPensionRoundingOptionEnum(String value) {
        this.value = value;
    }
}
