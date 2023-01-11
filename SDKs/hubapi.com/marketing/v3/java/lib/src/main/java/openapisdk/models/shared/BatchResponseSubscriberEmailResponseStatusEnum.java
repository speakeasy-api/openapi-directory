package openapisdk.models.shared;


public enum BatchResponseSubscriberEmailResponseStatusEnum {
    PENDING("PENDING"),
    PROCESSING("PROCESSING"),
    CANCELED("CANCELED"),
    COMPLETE("COMPLETE");

    public final String value;

    private BatchResponseSubscriberEmailResponseStatusEnum(String value) {
        this.value = value;
    }
}
