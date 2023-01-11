package openapisdk.models.shared;


public enum PricingCapCostTypeEnum {
    PLANNING_PLACEMENT_CAP_COST_TYPE_NONE("PLANNING_PLACEMENT_CAP_COST_TYPE_NONE"),
    PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY("PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY"),
    PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE("PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE");

    public final String value;

    private PricingCapCostTypeEnum(String value) {
        this.value = value;
    }
}
