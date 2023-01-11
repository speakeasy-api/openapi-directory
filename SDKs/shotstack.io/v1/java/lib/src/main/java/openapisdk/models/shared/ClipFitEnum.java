package openapisdk.models.shared;


public enum ClipFitEnum {
    COVER("cover"),
    CONTAIN("contain"),
    CROP("crop"),
    NONE("none");

    public final String value;

    private ClipFitEnum(String value) {
        this.value = value;
    }
}
