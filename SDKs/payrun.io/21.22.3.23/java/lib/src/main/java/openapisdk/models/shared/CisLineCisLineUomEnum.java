package openapisdk.models.shared;


public enum CisLineCisLineUomEnum {
    NOT_SET("NotSet"),
    MINUTE("Minute"),
    HOUR("Hour"),
    DAY("Day"),
    WEEK("Week"),
    MONTH("Month"),
    YEAR("Year"),
    UNIT("Unit");

    public final String value;

    private CisLineCisLineUomEnum(String value) {
        this.value = value;
    }
}
