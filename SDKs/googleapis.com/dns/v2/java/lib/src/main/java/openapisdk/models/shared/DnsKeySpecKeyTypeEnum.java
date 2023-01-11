package openapisdk.models.shared;


public enum DnsKeySpecKeyTypeEnum {
    KEY_SIGNING("KEY_SIGNING"),
    ZONE_SIGNING("ZONE_SIGNING");

    public final String value;

    private DnsKeySpecKeyTypeEnum(String value) {
        this.value = value;
    }
}
