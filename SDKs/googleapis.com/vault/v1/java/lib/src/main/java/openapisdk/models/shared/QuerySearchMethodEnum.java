package openapisdk.models.shared;


public enum QuerySearchMethodEnum {
    SEARCH_METHOD_UNSPECIFIED("SEARCH_METHOD_UNSPECIFIED"),
    ACCOUNT("ACCOUNT"),
    ORG_UNIT("ORG_UNIT"),
    TEAM_DRIVE("TEAM_DRIVE"),
    ENTIRE_ORG("ENTIRE_ORG"),
    ROOM("ROOM"),
    SITES_URL("SITES_URL"),
    SHARED_DRIVE("SHARED_DRIVE");

    public final String value;

    private QuerySearchMethodEnum(String value) {
        this.value = value;
    }
}
