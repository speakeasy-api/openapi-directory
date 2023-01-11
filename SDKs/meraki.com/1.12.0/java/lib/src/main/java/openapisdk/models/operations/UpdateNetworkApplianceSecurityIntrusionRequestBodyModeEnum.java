package openapisdk.models.operations;


public enum UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum {
    PREVENTION("prevention"),
    DETECTION("detection"),
    DISABLED("disabled");

    public final String value;

    private UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum(String value) {
        this.value = value;
    }
}
