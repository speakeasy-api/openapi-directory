package openapisdk.models.operations;


public enum GetImagesTypeEnum {
    SYSTEM("system"),
    SNAPSHOT("snapshot"),
    BACKUP("backup"),
    APP("app");

    public final String value;

    private GetImagesTypeEnum(String value) {
        this.value = value;
    }
}
