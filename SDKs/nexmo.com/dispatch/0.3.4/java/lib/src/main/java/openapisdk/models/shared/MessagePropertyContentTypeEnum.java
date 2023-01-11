package openapisdk.models.shared;


public enum MessagePropertyContentTypeEnum {
    TEXT("text"),
    IMAGE("image"),
    AUDIO("audio"),
    VIDEO("video"),
    FILE("file"),
    TEMPLATE("template"),
    CUSTOM("custom");

    public final String value;

    private MessagePropertyContentTypeEnum(String value) {
        this.value = value;
    }
}
