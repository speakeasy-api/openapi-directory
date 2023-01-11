package openapisdk.models.shared;


public enum PricePricingTypeEnum {
    PRICING_TYPE_UNSPECIFIED("PRICING_TYPE_UNSPECIFIED"),
    COST_PER_MILLE("COST_PER_MILLE"),
    COST_PER_DAY("COST_PER_DAY");

    public final String value;

    private PricePricingTypeEnum(String value) {
        this.value = value;
    }
}
