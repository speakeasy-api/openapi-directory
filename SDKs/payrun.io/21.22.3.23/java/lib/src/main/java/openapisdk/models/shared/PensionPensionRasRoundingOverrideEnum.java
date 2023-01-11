package openapisdk.models.shared;


public enum PensionPensionRasRoundingOverrideEnum {
    NOT_SET("NotSet"),
    PENNY_UP("PennyUp"),
    PENNY_DOWN("PennyDown"),
    BANKERS("Bankers"),
    FIVE_UP("FiveUp"),
    FIVE_DOWN("FiveDown"),
    FLOOR("Floor"),
    CEILING("Ceiling");

    public final String value;

    private PensionPensionRasRoundingOverrideEnum(String value) {
        this.value = value;
    }
}
