package openapisdk.models.shared;


public enum TargetingExpansionConfigTargetingExpansionLevelEnum {
    TARGETING_EXPANSION_LEVEL_UNSPECIFIED("TARGETING_EXPANSION_LEVEL_UNSPECIFIED"),
    NO_EXPANSION("NO_EXPANSION"),
    LEAST_EXPANSION("LEAST_EXPANSION"),
    SOME_EXPANSION("SOME_EXPANSION"),
    BALANCED_EXPANSION("BALANCED_EXPANSION"),
    MORE_EXPANSION("MORE_EXPANSION"),
    MOST_EXPANSION("MOST_EXPANSION");

    public final String value;

    private TargetingExpansionConfigTargetingExpansionLevelEnum(String value) {
        this.value = value;
    }
}
