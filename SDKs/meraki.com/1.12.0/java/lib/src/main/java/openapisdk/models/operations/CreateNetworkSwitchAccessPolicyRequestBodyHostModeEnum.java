package openapisdk.models.operations;


public enum CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum {
    SINGLE_HOST("Single-Host"),
    MULTI_DOMAIN("Multi-Domain"),
    MULTI_HOST("Multi-Host"),
    MULTI_AUTH("Multi-Auth");

    public final String value;

    private CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum(String value) {
        this.value = value;
    }
}
