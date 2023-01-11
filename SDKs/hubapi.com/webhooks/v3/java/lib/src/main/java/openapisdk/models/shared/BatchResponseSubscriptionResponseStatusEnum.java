package openapisdk.models.shared;


public enum BatchResponseSubscriptionResponseStatusEnum {
    PENDING("PENDING"),
    PROCESSING("PROCESSING"),
    CANCELED("CANCELED"),
    COMPLETE("COMPLETE");

    public final String value;

    private BatchResponseSubscriptionResponseStatusEnum(String value) {
        this.value = value;
    }
}
