package openapisdk.models.operations;


public enum StorageBucketsPatchPredefinedDefaultObjectAclEnum {
    AUTHENTICATED_READ("authenticatedRead"),
    BUCKET_OWNER_FULL_CONTROL("bucketOwnerFullControl"),
    BUCKET_OWNER_READ("bucketOwnerRead"),
    PRIVATE_("private"),
    PROJECT_PRIVATE("projectPrivate"),
    PUBLIC_READ("publicRead");

    public final String value;

    private StorageBucketsPatchPredefinedDefaultObjectAclEnum(String value) {
        this.value = value;
    }
}
