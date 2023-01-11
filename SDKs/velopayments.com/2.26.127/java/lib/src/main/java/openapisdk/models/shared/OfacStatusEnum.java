package openapisdk.models.shared;


public enum OfacStatusEnum {
    PENDING("PENDING"),
    PASSED("PASSED"),
    FAILED("FAILED");

    public final String value;

    private OfacStatusEnum(String value) {
        this.value = value;
    }
}
