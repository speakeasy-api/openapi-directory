package openapisdk.models.shared;


public enum GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum {
    THREAT_SOURCE_TYPE_UNSPECIFIED("THREAT_SOURCE_TYPE_UNSPECIFIED"),
    MATCHING_URL("MATCHING_URL"),
    TAB_URL("TAB_URL"),
    TAB_REDIRECT("TAB_REDIRECT"),
    TAB_RESOURCE("TAB_RESOURCE");

    public final String value;

    private GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum(String value) {
        this.value = value;
    }
}
