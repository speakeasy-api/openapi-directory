package openapisdk.models.shared;


public enum ConsoleServerPortTypeLabelEnum {
    DE9("DE-9"),
    DB25("DB-25"),
    RJ11("RJ-11"),
    RJ12("RJ-12"),
    RJ45("RJ-45"),
    USB_TYPE_A("USB Type A"),
    USB_TYPE_B("USB Type B"),
    USB_TYPE_C("USB Type C"),
    USB_MINI_A("USB Mini A"),
    USB_MINI_B("USB Mini B"),
    USB_MICRO_A("USB Micro A"),
    USB_MICRO_B("USB Micro B"),
    OTHER("Other");

    public final String value;

    private ConsoleServerPortTypeLabelEnum(String value) {
        this.value = value;
    }
}
