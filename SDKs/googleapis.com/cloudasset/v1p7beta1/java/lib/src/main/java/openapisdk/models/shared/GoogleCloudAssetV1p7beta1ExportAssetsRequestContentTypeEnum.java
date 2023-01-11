package openapisdk.models.shared;


public enum GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum {
    CONTENT_TYPE_UNSPECIFIED("CONTENT_TYPE_UNSPECIFIED"),
    RESOURCE("RESOURCE"),
    IAM_POLICY("IAM_POLICY"),
    ORG_POLICY("ORG_POLICY"),
    ACCESS_POLICY("ACCESS_POLICY"),
    RELATIONSHIP("RELATIONSHIP");

    public final String value;

    private GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum(String value) {
        this.value = value;
    }
}
