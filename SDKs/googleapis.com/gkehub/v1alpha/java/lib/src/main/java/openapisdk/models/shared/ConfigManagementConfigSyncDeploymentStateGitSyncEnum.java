package openapisdk.models.shared;


public enum ConfigManagementConfigSyncDeploymentStateGitSyncEnum {
    DEPLOYMENT_STATE_UNSPECIFIED("DEPLOYMENT_STATE_UNSPECIFIED"),
    NOT_INSTALLED("NOT_INSTALLED"),
    INSTALLED("INSTALLED"),
    ERROR("ERROR");

    public final String value;

    private ConfigManagementConfigSyncDeploymentStateGitSyncEnum(String value) {
        this.value = value;
    }
}
