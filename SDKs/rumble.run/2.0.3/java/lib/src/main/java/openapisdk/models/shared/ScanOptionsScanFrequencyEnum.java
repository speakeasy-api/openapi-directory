package openapisdk.models.shared;


public enum ScanOptionsScanFrequencyEnum {
    ONCE("once"),
    HOURLY("hourly"),
    DAILY("daily"),
    WEEKLY("weekly"),
    MONTHLY("monthly"),
    CONTINUOUS("continuous");

    public final String value;

    private ScanOptionsScanFrequencyEnum(String value) {
        this.value = value;
    }
}
