package openapisdk.models.operations;


public enum GamesScoresGetTimeSpanEnum {
    SCORE_TIME_SPAN_UNSPECIFIED("SCORE_TIME_SPAN_UNSPECIFIED"),
    ALL("ALL"),
    ALL_TIME("ALL_TIME"),
    WEEKLY("WEEKLY"),
    DAILY("DAILY");

    public final String value;

    private GamesScoresGetTimeSpanEnum(String value) {
        this.value = value;
    }
}
