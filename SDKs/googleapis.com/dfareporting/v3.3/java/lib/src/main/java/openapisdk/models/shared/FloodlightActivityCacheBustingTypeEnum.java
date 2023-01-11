package openapisdk.models.shared;


public enum FloodlightActivityCacheBustingTypeEnum {
    JAVASCRIPT("JAVASCRIPT"),
    ACTIVE_SERVER_PAGE("ACTIVE_SERVER_PAGE"),
    JSP("JSP"),
    PHP("PHP"),
    COLD_FUSION("COLD_FUSION");

    public final String value;

    private FloodlightActivityCacheBustingTypeEnum(String value) {
        this.value = value;
    }
}
