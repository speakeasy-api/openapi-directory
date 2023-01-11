package openapisdk.models.shared;


public enum PartOfSpeechAspectEnum {
    ASPECT_UNKNOWN("ASPECT_UNKNOWN"),
    PERFECTIVE("PERFECTIVE"),
    IMPERFECTIVE("IMPERFECTIVE"),
    PROGRESSIVE("PROGRESSIVE");

    public final String value;

    private PartOfSpeechAspectEnum(String value) {
        this.value = value;
    }
}
