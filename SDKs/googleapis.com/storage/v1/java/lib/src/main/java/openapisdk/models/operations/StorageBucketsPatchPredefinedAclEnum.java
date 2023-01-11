package openapisdk.models.operations;


public enum StorageBucketsPatchPredefinedAclEnum {
    AUTHENTICATED_READ("authenticatedRead"),
    PRIVATE_("private"),
    PROJECT_PRIVATE("projectPrivate"),
    PUBLIC_READ("publicRead"),
    PUBLIC_READ_WRITE("publicReadWrite");

    public final String value;

    private StorageBucketsPatchPredefinedAclEnum(String value) {
        this.value = value;
    }
}
