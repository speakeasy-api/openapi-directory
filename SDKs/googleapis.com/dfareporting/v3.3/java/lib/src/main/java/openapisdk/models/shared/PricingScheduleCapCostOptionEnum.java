package openapisdk.models.shared;


public enum PricingScheduleCapCostOptionEnum {
    CAP_COST_NONE("CAP_COST_NONE"),
    CAP_COST_MONTHLY("CAP_COST_MONTHLY"),
    CAP_COST_CUMULATIVE("CAP_COST_CUMULATIVE");

    public final String value;

    private PricingScheduleCapCostOptionEnum(String value) {
        this.value = value;
    }
}
