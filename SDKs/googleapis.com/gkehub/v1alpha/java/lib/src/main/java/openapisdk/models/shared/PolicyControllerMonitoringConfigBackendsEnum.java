package openapisdk.models.shared;


public enum PolicyControllerMonitoringConfigBackendsEnum {
    MONITORING_BACKEND_UNSPECIFIED("MONITORING_BACKEND_UNSPECIFIED"),
    PROMETHEUS("PROMETHEUS"),
    CLOUD_MONITORING("CLOUD_MONITORING");

    public final String value;

    private PolicyControllerMonitoringConfigBackendsEnum(String value) {
        this.value = value;
    }
}
