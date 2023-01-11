package openapisdk.models.shared;


public enum WmxSitePermissionLevelEnum {
    SITE_PERMISSION_LEVEL_UNSPECIFIED("SITE_PERMISSION_LEVEL_UNSPECIFIED"),
    SITE_OWNER("SITE_OWNER"),
    SITE_FULL_USER("SITE_FULL_USER"),
    SITE_RESTRICTED_USER("SITE_RESTRICTED_USER"),
    SITE_UNVERIFIED_USER("SITE_UNVERIFIED_USER");

    public final String value;

    private WmxSitePermissionLevelEnum(String value) {
        this.value = value;
    }
}
