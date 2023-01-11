package openapisdk.models.shared;


public enum LeaderboardEntryTimeSpanEnum {
    SCORE_TIME_SPAN_UNSPECIFIED("SCORE_TIME_SPAN_UNSPECIFIED"),
    ALL_TIME("ALL_TIME"),
    WEEKLY("WEEKLY"),
    DAILY("DAILY");

    public final String value;

    private LeaderboardEntryTimeSpanEnum(String value) {
        this.value = value;
    }
}
