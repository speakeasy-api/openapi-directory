package openapisdk.models.shared;


public enum BatchResponseSubscriberVidResponseStatusEnum {
    PENDING("PENDING"),
    PROCESSING("PROCESSING"),
    CANCELED("CANCELED"),
    COMPLETE("COMPLETE");

    public final String value;

    private BatchResponseSubscriberVidResponseStatusEnum(String value) {
        this.value = value;
    }
}
