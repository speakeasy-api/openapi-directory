package openapisdk.models.operations;


public enum CloudassetAssetsListContentTypeEnum {
    CONTENT_TYPE_UNSPECIFIED("CONTENT_TYPE_UNSPECIFIED"),
    RESOURCE("RESOURCE"),
    IAM_POLICY("IAM_POLICY"),
    ORG_POLICY("ORG_POLICY"),
    ACCESS_POLICY("ACCESS_POLICY");

    public final String value;

    private CloudassetAssetsListContentTypeEnum(String value) {
        this.value = value;
    }
}
