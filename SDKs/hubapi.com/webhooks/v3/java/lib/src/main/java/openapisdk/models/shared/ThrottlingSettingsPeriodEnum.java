package openapisdk.models.shared;


public enum ThrottlingSettingsPeriodEnum {
    SECONDLY("SECONDLY"),
    ROLLING_MINUTE("ROLLING_MINUTE");

    public final String value;

    private ThrottlingSettingsPeriodEnum(String value) {
        this.value = value;
    }
}
