package openapisdk.models.shared;


public enum VideoFileDetailsVideoStreamRotationEnum {
    NONE("none"),
    CLOCKWISE("clockwise"),
    UPSIDE_DOWN("upsideDown"),
    COUNTER_CLOCKWISE("counterClockwise"),
    OTHER("other");

    public final String value;

    private VideoFileDetailsVideoStreamRotationEnum(String value) {
        this.value = value;
    }
}
