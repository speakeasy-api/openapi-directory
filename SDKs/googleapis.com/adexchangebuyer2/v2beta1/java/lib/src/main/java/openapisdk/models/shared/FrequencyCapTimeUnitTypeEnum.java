package openapisdk.models.shared;


public enum FrequencyCapTimeUnitTypeEnum {
    TIME_UNIT_TYPE_UNSPECIFIED("TIME_UNIT_TYPE_UNSPECIFIED"),
    MINUTE("MINUTE"),
    HOUR("HOUR"),
    DAY("DAY"),
    WEEK("WEEK"),
    MONTH("MONTH"),
    LIFETIME("LIFETIME"),
    POD("POD"),
    STREAM("STREAM");

    public final String value;

    private FrequencyCapTimeUnitTypeEnum(String value) {
        this.value = value;
    }
}
