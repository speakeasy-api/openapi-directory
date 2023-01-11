package openapisdk.models.operations;


public enum StorageBucketsInsertPredefinedAclEnum {
    AUTHENTICATED_READ("authenticatedRead"),
    PRIVATE_("private"),
    PROJECT_PRIVATE("projectPrivate"),
    PUBLIC_READ("publicRead"),
    PUBLIC_READ_WRITE("publicReadWrite");

    public final String value;

    private StorageBucketsInsertPredefinedAclEnum(String value) {
        this.value = value;
    }
}
