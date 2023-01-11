package openapisdk.models.shared;


public enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    STATE_CREATED("STATE_CREATED"),
    STATE_ACTIVE("STATE_ACTIVE"),
    STATE_CANCELLED("STATE_CANCELLED"),
    STATE_IN_GRACE_PERIOD("STATE_IN_GRACE_PERIOD"),
    STATE_CANCEL_AT_END_OF_CYCLE("STATE_CANCEL_AT_END_OF_CYCLE"),
    STATE_SUSPENDED("STATE_SUSPENDED");

    public final String value;

    private GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum(String value) {
        this.value = value;
    }
}
