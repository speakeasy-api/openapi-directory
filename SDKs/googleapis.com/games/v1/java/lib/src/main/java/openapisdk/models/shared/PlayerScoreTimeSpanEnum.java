package openapisdk.models.shared;


public enum PlayerScoreTimeSpanEnum {
    SCORE_TIME_SPAN_UNSPECIFIED("SCORE_TIME_SPAN_UNSPECIFIED"),
    ALL_TIME("ALL_TIME"),
    WEEKLY("WEEKLY"),
    DAILY("DAILY");

    public final String value;

    private PlayerScoreTimeSpanEnum(String value) {
        this.value = value;
    }
}
