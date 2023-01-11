package openapisdk.models.shared;


public enum DsRecordDigestTypeEnum {
    DIGEST_TYPE_UNSPECIFIED("DIGEST_TYPE_UNSPECIFIED"),
    SHA1("SHA1"),
    SHA256("SHA256"),
    GOST3411("GOST3411"),
    SHA384("SHA384");

    public final String value;

    private DsRecordDigestTypeEnum(String value) {
        this.value = value;
    }
}
