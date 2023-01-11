package openapisdk.models.shared;


public enum GoogleCloudChannelV1PriceByResourceResourceTypeEnum {
    RESOURCE_TYPE_UNSPECIFIED("RESOURCE_TYPE_UNSPECIFIED"),
    SEAT("SEAT"),
    MAU("MAU"),
    GB("GB"),
    LICENSED_USER("LICENSED_USER"),
    MINUTES("MINUTES"),
    IAAS_USAGE("IAAS_USAGE"),
    SUBSCRIPTION("SUBSCRIPTION");

    public final String value;

    private GoogleCloudChannelV1PriceByResourceResourceTypeEnum(String value) {
        this.value = value;
    }
}
