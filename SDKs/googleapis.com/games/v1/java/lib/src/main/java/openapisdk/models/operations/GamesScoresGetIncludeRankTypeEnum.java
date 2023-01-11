package openapisdk.models.operations;


public enum GamesScoresGetIncludeRankTypeEnum {
    INCLUDE_RANK_TYPE_UNSPECIFIED("INCLUDE_RANK_TYPE_UNSPECIFIED"),
    ALL("ALL"),
    PUBLIC_("PUBLIC"),
    SOCIAL("SOCIAL"),
    FRIENDS("FRIENDS");

    public final String value;

    private GamesScoresGetIncludeRankTypeEnum(String value) {
        this.value = value;
    }
}
