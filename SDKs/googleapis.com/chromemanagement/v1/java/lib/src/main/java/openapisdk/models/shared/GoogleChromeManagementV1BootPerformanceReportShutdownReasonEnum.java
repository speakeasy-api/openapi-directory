package openapisdk.models.shared;


public enum GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum {
    SHUTDOWN_REASON_UNSPECIFIED("SHUTDOWN_REASON_UNSPECIFIED"),
    USER_REQUEST("USER_REQUEST"),
    SYSTEM_UPDATE("SYSTEM_UPDATE"),
    LOW_BATTERY("LOW_BATTERY"),
    OTHER("OTHER");

    public final String value;

    private GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum(String value) {
        this.value = value;
    }
}
