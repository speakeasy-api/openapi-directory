package openapisdk.models.shared;


public enum ConfigManagementConfigSyncDeploymentStateMonitorEnum {
    DEPLOYMENT_STATE_UNSPECIFIED("DEPLOYMENT_STATE_UNSPECIFIED"),
    NOT_INSTALLED("NOT_INSTALLED"),
    INSTALLED("INSTALLED"),
    ERROR("ERROR");

    public final String value;

    private ConfigManagementConfigSyncDeploymentStateMonitorEnum(String value) {
        this.value = value;
    }
}
