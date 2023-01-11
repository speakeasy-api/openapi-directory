package openapisdk.models.shared;


public enum UsageTriggerEnumRecurringEnum {
    DAILY("daily"),
    MONTHLY("monthly"),
    YEARLY("yearly"),
    ALLTIME("alltime");

    public final String value;

    private UsageTriggerEnumRecurringEnum(String value) {
        this.value = value;
    }
}
