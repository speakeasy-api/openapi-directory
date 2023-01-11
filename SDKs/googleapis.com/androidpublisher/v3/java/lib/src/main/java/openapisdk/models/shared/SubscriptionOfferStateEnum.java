package openapisdk.models.shared;


public enum SubscriptionOfferStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    DRAFT("DRAFT"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE");

    public final String value;

    private SubscriptionOfferStateEnum(String value) {
        this.value = value;
    }
}
