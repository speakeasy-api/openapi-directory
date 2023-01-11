package openapisdk.models.shared;


public enum DeveloperMetadataLookupLocationMatchingStrategyEnum {
    DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED("DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED"),
    EXACT_LOCATION("EXACT_LOCATION"),
    INTERSECTING_LOCATION("INTERSECTING_LOCATION");

    public final String value;

    private DeveloperMetadataLookupLocationMatchingStrategyEnum(String value) {
        this.value = value;
    }
}
