package openapisdk.models.shared;


public enum DnsKeyTypeEnum {
    KEY_SIGNING("keySigning"),
    ZONE_SIGNING("zoneSigning");

    public final String value;

    private DnsKeyTypeEnum(String value) {
        this.value = value;
    }
}
