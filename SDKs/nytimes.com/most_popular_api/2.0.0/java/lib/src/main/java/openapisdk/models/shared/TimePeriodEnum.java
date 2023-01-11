package openapisdk.models.shared;


public enum TimePeriodEnum {
    ONE("1"),
    SEVEN("7"),
    THIRTY("30");

    public final String value;

    private TimePeriodEnum(String value) {
        this.value = value;
    }
}
