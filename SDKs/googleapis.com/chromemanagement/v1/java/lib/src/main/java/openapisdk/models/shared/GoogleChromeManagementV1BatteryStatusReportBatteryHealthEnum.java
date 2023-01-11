package openapisdk.models.shared;


public enum GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum {
    BATTERY_HEALTH_UNSPECIFIED("BATTERY_HEALTH_UNSPECIFIED"),
    BATTERY_HEALTH_NORMAL("BATTERY_HEALTH_NORMAL"),
    BATTERY_REPLACE_SOON("BATTERY_REPLACE_SOON"),
    BATTERY_REPLACE_NOW("BATTERY_REPLACE_NOW");

    public final String value;

    private GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum(String value) {
        this.value = value;
    }
}
