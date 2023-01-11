package openapisdk.models.shared;


public enum CisInstructionCisInstructionUomEnum {
    NOT_SET("NotSet"),
    MINUTE("Minute"),
    HOUR("Hour"),
    DAY("Day"),
    WEEK("Week"),
    MONTH("Month"),
    YEAR("Year"),
    UNIT("Unit");

    public final String value;

    private CisInstructionCisInstructionUomEnum(String value) {
        this.value = value;
    }
}
