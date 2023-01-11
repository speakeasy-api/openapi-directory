package openapisdk.models.shared;


public enum InstructionsTypeEnum {
    CODED("coded"),
    TEXT("text"),
    TAGGED("tagged");

    public final String value;

    private InstructionsTypeEnum(String value) {
        this.value = value;
    }
}
