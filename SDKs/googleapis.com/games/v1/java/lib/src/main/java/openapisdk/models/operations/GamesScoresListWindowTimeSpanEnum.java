package openapisdk.models.operations;


public enum GamesScoresListWindowTimeSpanEnum {
    SCORE_TIME_SPAN_UNSPECIFIED("SCORE_TIME_SPAN_UNSPECIFIED"),
    ALL_TIME("ALL_TIME"),
    WEEKLY("WEEKLY"),
    DAILY("DAILY");

    public final String value;

    private GamesScoresListWindowTimeSpanEnum(String value) {
        this.value = value;
    }
}
