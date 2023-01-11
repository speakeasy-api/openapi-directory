package openapisdk.models.shared;


public enum PlacementStatusEnum {
    PENDING_REVIEW("PENDING_REVIEW"),
    PAYMENT_ACCEPTED("PAYMENT_ACCEPTED"),
    PAYMENT_REJECTED("PAYMENT_REJECTED"),
    ACKNOWLEDGE_REJECTION("ACKNOWLEDGE_REJECTION"),
    ACKNOWLEDGE_ACCEPTANCE("ACKNOWLEDGE_ACCEPTANCE"),
    DRAFT("DRAFT");

    public final String value;

    private PlacementStatusEnum(String value) {
        this.value = value;
    }
}
