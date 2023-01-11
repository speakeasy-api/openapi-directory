package openapisdk.models.shared;


public enum ApplicationDatabaseTypeEnum {
    DATABASE_TYPE_UNSPECIFIED("DATABASE_TYPE_UNSPECIFIED"),
    CLOUD_DATASTORE("CLOUD_DATASTORE"),
    CLOUD_FIRESTORE("CLOUD_FIRESTORE"),
    CLOUD_DATASTORE_COMPATIBILITY("CLOUD_DATASTORE_COMPATIBILITY");

    public final String value;

    private ApplicationDatabaseTypeEnum(String value) {
        this.value = value;
    }
}
