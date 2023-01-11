package openapisdk.models.operations;


public enum GetAddonEnum {
    CONTINENT("continent"),
    COUNTRY("country"),
    REGION("region"),
    CITY("city"),
    GEOTARGETING("geotargeting"),
    COUNTRY_GROUPINGS("country_groupings"),
    TIME_ZONE_INFO("time_zone_info");

    public final String value;

    private GetAddonEnum(String value) {
        this.value = value;
    }
}
