package openapisdk.models.shared;


public enum LeaderboardConfigurationScoreOrderEnum {
    SCORE_ORDER_UNSPECIFIED("SCORE_ORDER_UNSPECIFIED"),
    LARGER_IS_BETTER("LARGER_IS_BETTER"),
    SMALLER_IS_BETTER("SMALLER_IS_BETTER");

    public final String value;

    private LeaderboardConfigurationScoreOrderEnum(String value) {
        this.value = value;
    }
}
