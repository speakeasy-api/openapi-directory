package openapisdk.models.shared;


public enum DeviceTypeEnum {
    UNKNOWN("unknown"),
    PHONE("phone"),
    TABLET("tablet"),
    WATCH("watch"),
    CHEST_STRAP("chestStrap"),
    SCALE("scale"),
    HEAD_MOUNTED("headMounted"),
    SMART_DISPLAY("smartDisplay");

    public final String value;

    private DeviceTypeEnum(String value) {
        this.value = value;
    }
}
