package openapisdk.models.shared;


public enum PublicSubscriptionStatusSourceOfStatusEnum {
    PORTAL_WIDE_STATUS("PORTAL_WIDE_STATUS"),
    BRAND_WIDE_STATUS("BRAND_WIDE_STATUS"),
    SUBSCRIPTION_STATUS("SUBSCRIPTION_STATUS");

    public final String value;

    private PublicSubscriptionStatusSourceOfStatusEnum(String value) {
        this.value = value;
    }
}
