package openapisdk.models.shared;


public enum SubscriptionStatusEnum {
    GRANTED("GRANTED"),
    DENIED("DENIED");

    public final String value;

    private SubscriptionStatusEnum(String value) {
        this.value = value;
    }
}
