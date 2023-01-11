package openapisdk.models.operations;


public enum CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
    NETWORK_DEFAULT("network default"),
    IGNORE("ignore"),
    CUSTOM("custom");

    public final String value;

    private CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum(String value) {
        this.value = value;
    }
}
