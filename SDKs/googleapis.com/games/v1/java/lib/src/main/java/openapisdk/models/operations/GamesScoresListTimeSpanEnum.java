package openapisdk.models.operations;


public enum GamesScoresListTimeSpanEnum {
    SCORE_TIME_SPAN_UNSPECIFIED("SCORE_TIME_SPAN_UNSPECIFIED"),
    ALL_TIME("ALL_TIME"),
    WEEKLY("WEEKLY"),
    DAILY("DAILY");

    public final String value;

    private GamesScoresListTimeSpanEnum(String value) {
        this.value = value;
    }
}
