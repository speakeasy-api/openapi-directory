package openapisdk.models.shared;


public enum DnsKeyDigestTypeEnum {
    SHA1("sha1"),
    SHA256("sha256"),
    SHA384("sha384");

    public final String value;

    private DnsKeyDigestTypeEnum(String value) {
        this.value = value;
    }
}
