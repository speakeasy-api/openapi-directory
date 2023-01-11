package openapisdk.models.shared;


public enum InstanceTransitEncryptionModeEnum {
    TRANSIT_ENCRYPTION_MODE_UNSPECIFIED("TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"),
    SERVER_AUTHENTICATION("SERVER_AUTHENTICATION"),
    DISABLED("DISABLED");

    public final String value;

    private InstanceTransitEncryptionModeEnum(String value) {
        this.value = value;
    }
}
