package openapisdk.models.operations;


public enum PostServersCreateServerResponseServerImageTypeEnum {
    SYSTEM("system"),
    APP("app"),
    SNAPSHOT("snapshot"),
    BACKUP("backup"),
    TEMPORARY("temporary");

    public final String value;

    private PostServersCreateServerResponseServerImageTypeEnum(String value) {
        this.value = value;
    }
}
