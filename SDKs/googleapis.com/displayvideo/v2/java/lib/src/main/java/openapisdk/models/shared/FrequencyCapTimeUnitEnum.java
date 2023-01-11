package openapisdk.models.shared;


public enum FrequencyCapTimeUnitEnum {
    TIME_UNIT_UNSPECIFIED("TIME_UNIT_UNSPECIFIED"),
    TIME_UNIT_LIFETIME("TIME_UNIT_LIFETIME"),
    TIME_UNIT_MONTHS("TIME_UNIT_MONTHS"),
    TIME_UNIT_WEEKS("TIME_UNIT_WEEKS"),
    TIME_UNIT_DAYS("TIME_UNIT_DAYS"),
    TIME_UNIT_HOURS("TIME_UNIT_HOURS"),
    TIME_UNIT_MINUTES("TIME_UNIT_MINUTES");

    public final String value;

    private FrequencyCapTimeUnitEnum(String value) {
        this.value = value;
    }
}
