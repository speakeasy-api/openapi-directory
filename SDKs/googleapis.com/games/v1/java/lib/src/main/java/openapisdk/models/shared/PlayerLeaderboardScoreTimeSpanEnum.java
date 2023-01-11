package openapisdk.models.shared;


public enum PlayerLeaderboardScoreTimeSpanEnum {
    SCORE_TIME_SPAN_UNSPECIFIED("SCORE_TIME_SPAN_UNSPECIFIED"),
    ALL_TIME("ALL_TIME"),
    WEEKLY("WEEKLY"),
    DAILY("DAILY");

    public final String value;

    private PlayerLeaderboardScoreTimeSpanEnum(String value) {
        this.value = value;
    }
}
