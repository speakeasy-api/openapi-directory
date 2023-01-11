package openapisdk.models.shared;


public enum VideoFileDetailsFileTypeEnum {
    VIDEO("video"),
    AUDIO("audio"),
    IMAGE("image"),
    ARCHIVE("archive"),
    DOCUMENT("document"),
    PROJECT("project"),
    OTHER("other");

    public final String value;

    private VideoFileDetailsFileTypeEnum(String value) {
        this.value = value;
    }
}
