package openapisdk.models.shared;


public enum ExportAssetsRequestContentTypeEnum {
    CONTENT_TYPE_UNSPECIFIED("CONTENT_TYPE_UNSPECIFIED"),
    RESOURCE("RESOURCE"),
    IAM_POLICY("IAM_POLICY");

    public final String value;

    private ExportAssetsRequestContentTypeEnum(String value) {
        this.value = value;
    }
}
