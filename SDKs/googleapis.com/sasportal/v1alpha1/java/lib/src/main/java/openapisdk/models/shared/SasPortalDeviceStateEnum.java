package openapisdk.models.shared;


public enum SasPortalDeviceStateEnum {
    DEVICE_STATE_UNSPECIFIED("DEVICE_STATE_UNSPECIFIED"),
    RESERVED("RESERVED"),
    REGISTERED("REGISTERED"),
    DEREGISTERED("DEREGISTERED");

    public final String value;

    private SasPortalDeviceStateEnum(String value) {
        this.value = value;
    }
}
