package openapisdk.models.shared;


public enum DocumentTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    PLAIN_TEXT("PLAIN_TEXT"),
    HTML("HTML");

    public final String value;

    private DocumentTypeEnum(String value) {
        this.value = value;
    }
}
