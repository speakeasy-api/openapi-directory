package openapisdk.models.shared;


public enum UsageRecordEnumGroupEnum {
    SIM("sim"),
    FLEET("fleet"),
    NETWORK("network"),
    ISO_COUNTRY("isoCountry");

    public final String value;

    private UsageRecordEnumGroupEnum(String value) {
        this.value = value;
    }
}
