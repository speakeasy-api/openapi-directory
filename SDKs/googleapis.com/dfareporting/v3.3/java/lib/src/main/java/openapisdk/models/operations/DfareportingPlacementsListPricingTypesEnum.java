package openapisdk.models.operations;


public enum DfareportingPlacementsListPricingTypesEnum {
    PRICING_TYPE_CPM("PRICING_TYPE_CPM"),
    PRICING_TYPE_CPC("PRICING_TYPE_CPC"),
    PRICING_TYPE_CPA("PRICING_TYPE_CPA"),
    PRICING_TYPE_FLAT_RATE_IMPRESSIONS("PRICING_TYPE_FLAT_RATE_IMPRESSIONS"),
    PRICING_TYPE_FLAT_RATE_CLICKS("PRICING_TYPE_FLAT_RATE_CLICKS"),
    PRICING_TYPE_CPM_ACTIVEVIEW("PRICING_TYPE_CPM_ACTIVEVIEW");

    public final String value;

    private DfareportingPlacementsListPricingTypesEnum(String value) {
        this.value = value;
    }
}
