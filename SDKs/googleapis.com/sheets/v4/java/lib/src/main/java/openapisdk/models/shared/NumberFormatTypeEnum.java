package openapisdk.models.shared;


public enum NumberFormatTypeEnum {
    NUMBER_FORMAT_TYPE_UNSPECIFIED("NUMBER_FORMAT_TYPE_UNSPECIFIED"),
    TEXT("TEXT"),
    NUMBER("NUMBER"),
    PERCENT("PERCENT"),
    CURRENCY("CURRENCY"),
    DATE("DATE"),
    TIME("TIME"),
    DATE_TIME("DATE_TIME"),
    SCIENTIFIC("SCIENTIFIC");

    public final String value;

    private NumberFormatTypeEnum(String value) {
        this.value = value;
    }
}
