package openapisdk.models.shared;


public enum FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum {
    EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION("EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"),
    INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION("INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"),
    INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION("INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION");

    public final String value;

    private FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum(String value) {
        this.value = value;
    }
}
