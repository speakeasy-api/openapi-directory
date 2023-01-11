package openapisdk.models.shared;


public enum EndpointsApiServiceRolloutStrategyEnum {
    UNSPECIFIED_ROLLOUT_STRATEGY("UNSPECIFIED_ROLLOUT_STRATEGY"),
    FIXED("FIXED"),
    MANAGED("MANAGED");

    public final String value;

    private EndpointsApiServiceRolloutStrategyEnum(String value) {
        this.value = value;
    }
}
