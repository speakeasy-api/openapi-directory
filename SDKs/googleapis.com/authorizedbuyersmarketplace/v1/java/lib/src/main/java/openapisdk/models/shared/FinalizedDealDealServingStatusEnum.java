package openapisdk.models.shared;


public enum FinalizedDealDealServingStatusEnum {
    DEAL_SERVING_STATUS_UNSPECIFIED("DEAL_SERVING_STATUS_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    ENDED("ENDED"),
    PAUSED_BY_BUYER("PAUSED_BY_BUYER"),
    PAUSED_BY_SELLER("PAUSED_BY_SELLER");

    public final String value;

    private FinalizedDealDealServingStatusEnum(String value) {
        this.value = value;
    }
}
