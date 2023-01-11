package openapisdk.models.shared;


public enum ConfigManagementPolicyControllerMonitoringBackendsEnum {
    MONITORING_BACKEND_UNSPECIFIED("MONITORING_BACKEND_UNSPECIFIED"),
    PROMETHEUS("PROMETHEUS"),
    CLOUD_MONITORING("CLOUD_MONITORING");

    public final String value;

    private ConfigManagementPolicyControllerMonitoringBackendsEnum(String value) {
        this.value = value;
    }
}
