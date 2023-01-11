package openapisdk.models.shared;


public enum ServingRestrictionStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    DISAPPROVAL("DISAPPROVAL"),
    PENDING_REVIEW("PENDING_REVIEW");

    public final String value;

    private ServingRestrictionStatusEnum(String value) {
        this.value = value;
    }
}
