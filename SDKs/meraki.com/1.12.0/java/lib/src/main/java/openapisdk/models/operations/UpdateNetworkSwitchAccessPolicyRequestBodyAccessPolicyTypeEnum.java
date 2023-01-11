package openapisdk.models.operations;


public enum UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum {
    EIGHT_HUNDRED_AND_TWO1X("802.1x"),
    MAC_AUTHENTICATION_BYPASS("MAC authentication bypass"),
    HYBRID_AUTHENTICATION("Hybrid authentication");

    public final String value;

    private UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum(String value) {
        this.value = value;
    }
}
