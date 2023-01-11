package openapisdk.models.shared;


public enum VerificationTypeEnum {
    DNS("dns"),
    FILE("file");

    public final String value;

    private VerificationTypeEnum(String value) {
        this.value = value;
    }
}
