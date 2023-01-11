package openapisdk.models.shared;


public enum BatchResponseSubscriptionResponseWithErrorsStatusEnum {
    PENDING("PENDING"),
    PROCESSING("PROCESSING"),
    CANCELED("CANCELED"),
    COMPLETE("COMPLETE");

    public final String value;

    private BatchResponseSubscriptionResponseWithErrorsStatusEnum(String value) {
        this.value = value;
    }
}
