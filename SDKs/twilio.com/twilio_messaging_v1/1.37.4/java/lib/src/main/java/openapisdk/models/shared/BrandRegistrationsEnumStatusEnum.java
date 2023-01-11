package openapisdk.models.shared;


public enum BrandRegistrationsEnumStatusEnum {
    PENDING("PENDING"),
    APPROVED("APPROVED"),
    FAILED("FAILED"),
    IN_REVIEW("IN_REVIEW"),
    DELETED("DELETED");

    public final String value;

    private BrandRegistrationsEnumStatusEnum(String value) {
        this.value = value;
    }
}
