package openapisdk.models.operations;


public enum StorageBucketsUpdatePredefinedAclEnum {
    AUTHENTICATED_READ("authenticatedRead"),
    PRIVATE_("private"),
    PROJECT_PRIVATE("projectPrivate"),
    PUBLIC_READ("publicRead"),
    PUBLIC_READ_WRITE("publicReadWrite");

    public final String value;

    private StorageBucketsUpdatePredefinedAclEnum(String value) {
        this.value = value;
    }
}
