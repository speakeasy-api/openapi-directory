package openapisdk.models.shared;


public enum DeviceOwnerTypeEnum {
    DEVICE_OWNERSHIP_UNSPECIFIED("DEVICE_OWNERSHIP_UNSPECIFIED"),
    COMPANY("COMPANY"),
    BYOD("BYOD");

    public final String value;

    private DeviceOwnerTypeEnum(String value) {
        this.value = value;
    }
}
