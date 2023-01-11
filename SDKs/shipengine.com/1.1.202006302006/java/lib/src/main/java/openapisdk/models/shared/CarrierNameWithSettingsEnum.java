package openapisdk.models.shared;


public enum CarrierNameWithSettingsEnum {
    DHL_EXPRESS("dhl_express"),
    FEDEX("fedex"),
    NEWGISTICS("newgistics"),
    UPS("ups");

    public final String value;

    private CarrierNameWithSettingsEnum(String value) {
        this.value = value;
    }
}
