package openapisdk.models.shared;


public enum VerificationMethodEnum {
    DNS("dns"),
    FILE("file");

    public final String value;

    private VerificationMethodEnum(String value) {
        this.value = value;
    }
}
