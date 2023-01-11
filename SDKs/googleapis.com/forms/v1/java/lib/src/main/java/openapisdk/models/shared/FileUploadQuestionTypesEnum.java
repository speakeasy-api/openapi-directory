package openapisdk.models.shared;


public enum FileUploadQuestionTypesEnum {
    FILE_TYPE_UNSPECIFIED("FILE_TYPE_UNSPECIFIED"),
    ANY("ANY"),
    DOCUMENT("DOCUMENT"),
    PRESENTATION("PRESENTATION"),
    SPREADSHEET("SPREADSHEET"),
    DRAWING("DRAWING"),
    PDF("PDF"),
    IMAGE("IMAGE"),
    VIDEO("VIDEO"),
    AUDIO("AUDIO");

    public final String value;

    private FileUploadQuestionTypesEnum(String value) {
        this.value = value;
    }
}
