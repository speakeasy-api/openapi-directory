package openapisdk.models.shared;


public enum ManifestTypeEnum {
    MANIFEST_TYPE_UNSPECIFIED("MANIFEST_TYPE_UNSPECIFIED"),
    HLS("HLS"),
    DASH("DASH");

    public final String value;

    private ManifestTypeEnum(String value) {
        this.value = value;
    }
}
