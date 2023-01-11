package openapisdk.models.shared;


public enum ItemProtocolEnum {
    ALTBEACON("altbeacon"),
    UNIWEAR("uniwear"),
    NFC("nfc"),
    GENERIC("generic"),
    EDDYSTONE("eddystone"),
    EPCGEN2("epcgen2"),
    IBEACON("ibeacon"),
    NANOBLE("nanoble");

    public final String value;

    private ItemProtocolEnum(String value) {
        this.value = value;
    }
}
