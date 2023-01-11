package openapisdk.models.shared;


public enum CreativeRotationWeightCalculationStrategyEnum {
    WEIGHT_STRATEGY_EQUAL("WEIGHT_STRATEGY_EQUAL"),
    WEIGHT_STRATEGY_CUSTOM("WEIGHT_STRATEGY_CUSTOM"),
    WEIGHT_STRATEGY_HIGHEST_CTR("WEIGHT_STRATEGY_HIGHEST_CTR"),
    WEIGHT_STRATEGY_OPTIMIZED("WEIGHT_STRATEGY_OPTIMIZED");

    public final String value;

    private CreativeRotationWeightCalculationStrategyEnum(String value) {
        this.value = value;
    }
}
