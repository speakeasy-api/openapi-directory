package openapisdk.models.shared;


public enum LeaderboardOrderEnum {
    SCORE_ORDER_UNSPECIFIED("SCORE_ORDER_UNSPECIFIED"),
    LARGER_IS_BETTER("LARGER_IS_BETTER"),
    SMALLER_IS_BETTER("SMALLER_IS_BETTER");

    public final String value;

    private LeaderboardOrderEnum(String value) {
        this.value = value;
    }
}
