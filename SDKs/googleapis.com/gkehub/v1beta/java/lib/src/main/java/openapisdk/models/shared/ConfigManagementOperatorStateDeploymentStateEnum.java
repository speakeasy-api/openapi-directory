package openapisdk.models.shared;


public enum ConfigManagementOperatorStateDeploymentStateEnum {
    DEPLOYMENT_STATE_UNSPECIFIED("DEPLOYMENT_STATE_UNSPECIFIED"),
    NOT_INSTALLED("NOT_INSTALLED"),
    INSTALLED("INSTALLED"),
    ERROR("ERROR");

    public final String value;

    private ConfigManagementOperatorStateDeploymentStateEnum(String value) {
        this.value = value;
    }
}
