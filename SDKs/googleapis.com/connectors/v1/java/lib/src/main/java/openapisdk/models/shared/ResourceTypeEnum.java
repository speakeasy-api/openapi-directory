package openapisdk.models.shared;


public enum ResourceTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    GCP_PROJECT("GCP_PROJECT"),
    GCP_RESOURCE("GCP_RESOURCE"),
    GCP_SECRETMANAGER_SECRET("GCP_SECRETMANAGER_SECRET"),
    GCP_SECRETMANAGER_SECRET_VERSION("GCP_SECRETMANAGER_SECRET_VERSION");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
