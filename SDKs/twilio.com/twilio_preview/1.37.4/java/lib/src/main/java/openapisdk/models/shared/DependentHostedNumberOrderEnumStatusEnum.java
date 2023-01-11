package openapisdk.models.shared;


public enum DependentHostedNumberOrderEnumStatusEnum {
    RECEIVED("received"),
    PENDING_VERIFICATION("pending-verification"),
    VERIFIED("verified"),
    PENDING_LOA("pending-loa"),
    CARRIER_PROCESSING("carrier-processing"),
    TESTING("testing"),
    COMPLETED("completed"),
    FAILED("failed"),
    ACTION_REQUIRED("action-required");

    public final String value;

    private DependentHostedNumberOrderEnumStatusEnum(String value) {
        this.value = value;
    }
}
