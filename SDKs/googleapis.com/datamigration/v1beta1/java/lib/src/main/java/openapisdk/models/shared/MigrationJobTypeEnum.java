package openapisdk.models.shared;


public enum MigrationJobTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    ONE_TIME("ONE_TIME"),
    CONTINUOUS("CONTINUOUS");

    public final String value;

    private MigrationJobTypeEnum(String value) {
        this.value = value;
    }
}
