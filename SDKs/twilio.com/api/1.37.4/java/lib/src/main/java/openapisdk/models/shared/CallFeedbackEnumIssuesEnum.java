package openapisdk.models.shared;


public enum CallFeedbackEnumIssuesEnum {
    AUDIO_LATENCY("audio-latency"),
    DIGITS_NOT_CAPTURED("digits-not-captured"),
    DROPPED_CALL("dropped-call"),
    IMPERFECT_AUDIO("imperfect-audio"),
    INCORRECT_CALLER_ID("incorrect-caller-id"),
    ONE_WAY_AUDIO("one-way-audio"),
    POST_DIAL_DELAY("post-dial-delay"),
    UNSOLICITED_CALL("unsolicited-call");

    public final String value;

    private CallFeedbackEnumIssuesEnum(String value) {
        this.value = value;
    }
}
