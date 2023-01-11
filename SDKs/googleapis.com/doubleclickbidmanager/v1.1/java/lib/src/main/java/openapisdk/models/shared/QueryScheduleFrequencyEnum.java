package openapisdk.models.shared;


public enum QueryScheduleFrequencyEnum {
    ONE_TIME("ONE_TIME"),
    DAILY("DAILY"),
    WEEKLY("WEEKLY"),
    SEMI_MONTHLY("SEMI_MONTHLY"),
    MONTHLY("MONTHLY"),
    QUARTERLY("QUARTERLY"),
    YEARLY("YEARLY");

    public final String value;

    private QueryScheduleFrequencyEnum(String value) {
        this.value = value;
    }
}
