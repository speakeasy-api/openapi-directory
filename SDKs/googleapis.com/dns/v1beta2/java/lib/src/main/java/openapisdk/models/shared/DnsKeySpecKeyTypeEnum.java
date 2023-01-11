package openapisdk.models.shared;


public enum DnsKeySpecKeyTypeEnum {
    KEY_SIGNING("keySigning"),
    ZONE_SIGNING("zoneSigning");

    public final String value;

    private DnsKeySpecKeyTypeEnum(String value) {
        this.value = value;
    }
}
