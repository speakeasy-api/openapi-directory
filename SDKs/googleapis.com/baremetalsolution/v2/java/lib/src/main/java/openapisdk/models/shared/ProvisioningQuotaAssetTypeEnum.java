package openapisdk.models.shared;


public enum ProvisioningQuotaAssetTypeEnum {
    ASSET_TYPE_UNSPECIFIED("ASSET_TYPE_UNSPECIFIED"),
    ASSET_TYPE_SERVER("ASSET_TYPE_SERVER"),
    ASSET_TYPE_STORAGE("ASSET_TYPE_STORAGE"),
    ASSET_TYPE_NETWORK("ASSET_TYPE_NETWORK");

    public final String value;

    private ProvisioningQuotaAssetTypeEnum(String value) {
        this.value = value;
    }
}
