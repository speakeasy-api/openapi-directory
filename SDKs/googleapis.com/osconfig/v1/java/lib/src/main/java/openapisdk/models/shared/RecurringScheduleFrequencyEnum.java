package openapisdk.models.shared;


public enum RecurringScheduleFrequencyEnum {
    FREQUENCY_UNSPECIFIED("FREQUENCY_UNSPECIFIED"),
    WEEKLY("WEEKLY"),
    MONTHLY("MONTHLY"),
    DAILY("DAILY");

    public final String value;

    private RecurringScheduleFrequencyEnum(String value) {
        this.value = value;
    }
}
