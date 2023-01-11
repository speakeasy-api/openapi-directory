package openapisdk.models.operations;


public enum GetUserInfo200ApplicationJsonDataDigestEnum {
    BCRYPT("BCRYPT"),
    SHA512("SHA512"),
    SHA256("SHA256"),
    SHA1("SHA1"),
    MD5("MD5");

    public final String value;

    private GetUserInfo200ApplicationJsonDataDigestEnum(String value) {
        this.value = value;
    }
}
