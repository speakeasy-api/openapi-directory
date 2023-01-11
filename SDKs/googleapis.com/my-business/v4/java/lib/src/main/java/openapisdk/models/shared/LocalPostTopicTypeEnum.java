package openapisdk.models.shared;


public enum LocalPostTopicTypeEnum {
    LOCAL_POST_TOPIC_TYPE_UNSPECIFIED("LOCAL_POST_TOPIC_TYPE_UNSPECIFIED"),
    STANDARD("STANDARD"),
    EVENT("EVENT"),
    OFFER("OFFER"),
    ALERT("ALERT");

    public final String value;

    private LocalPostTopicTypeEnum(String value) {
        this.value = value;
    }
}
