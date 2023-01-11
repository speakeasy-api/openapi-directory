package openapisdk.models.shared;


public enum DnsKeyDigestTypeEnum {
    SHA1("SHA1"),
    SHA256("SHA256"),
    SHA384("SHA384");

    public final String value;

    private DnsKeyDigestTypeEnum(String value) {
        this.value = value;
    }
}
