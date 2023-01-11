package openapisdk.models.shared;


public enum AssetLicenseEnum {
    UNKNOWN("UNKNOWN"),
    CREATIVE_COMMONS_BY("CREATIVE_COMMONS_BY"),
    ALL_RIGHTS_RESERVED("ALL_RIGHTS_RESERVED");

    public final String value;

    private AssetLicenseEnum(String value) {
        this.value = value;
    }
}
