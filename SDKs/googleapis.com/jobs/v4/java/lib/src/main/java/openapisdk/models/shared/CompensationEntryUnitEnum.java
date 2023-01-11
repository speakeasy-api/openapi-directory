package openapisdk.models.shared;


public enum CompensationEntryUnitEnum {
    COMPENSATION_UNIT_UNSPECIFIED("COMPENSATION_UNIT_UNSPECIFIED"),
    HOURLY("HOURLY"),
    DAILY("DAILY"),
    WEEKLY("WEEKLY"),
    MONTHLY("MONTHLY"),
    YEARLY("YEARLY"),
    ONE_TIME("ONE_TIME"),
    OTHER_COMPENSATION_UNIT("OTHER_COMPENSATION_UNIT");

    public final String value;

    private CompensationEntryUnitEnum(String value) {
        this.value = value;
    }
}
