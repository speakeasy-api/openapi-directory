package openapisdk.models.shared;


public enum AttractionTypeEnum {
    EVENT("event"),
    VENUE("venue"),
    ATTRACTION("attraction");

    public final String value;

    private AttractionTypeEnum(String value) {
        this.value = value;
    }
}
