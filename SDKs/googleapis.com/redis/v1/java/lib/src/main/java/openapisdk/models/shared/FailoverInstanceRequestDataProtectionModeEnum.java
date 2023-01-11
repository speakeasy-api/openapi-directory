package openapisdk.models.shared;


public enum FailoverInstanceRequestDataProtectionModeEnum {
    DATA_PROTECTION_MODE_UNSPECIFIED("DATA_PROTECTION_MODE_UNSPECIFIED"),
    LIMITED_DATA_LOSS("LIMITED_DATA_LOSS"),
    FORCE_DATA_LOSS("FORCE_DATA_LOSS");

    public final String value;

    private FailoverInstanceRequestDataProtectionModeEnum(String value) {
        this.value = value;
    }
}
