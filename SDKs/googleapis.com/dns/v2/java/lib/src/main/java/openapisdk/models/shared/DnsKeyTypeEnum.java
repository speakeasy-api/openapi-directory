package openapisdk.models.shared;


public enum DnsKeyTypeEnum {
    KEY_SIGNING("KEY_SIGNING"),
    ZONE_SIGNING("ZONE_SIGNING");

    public final String value;

    private DnsKeyTypeEnum(String value) {
        this.value = value;
    }
}
