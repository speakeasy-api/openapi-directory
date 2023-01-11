package openapisdk.models.shared;


public enum SearchJobsRequestDiversificationLevelEnum {
    DIVERSIFICATION_LEVEL_UNSPECIFIED("DIVERSIFICATION_LEVEL_UNSPECIFIED"),
    DISABLED("DISABLED"),
    SIMPLE("SIMPLE"),
    ONE_PER_COMPANY("ONE_PER_COMPANY"),
    TWO_PER_COMPANY("TWO_PER_COMPANY"),
    DIVERSIFY_BY_LOOSER_SIMILARITY("DIVERSIFY_BY_LOOSER_SIMILARITY");

    public final String value;

    private SearchJobsRequestDiversificationLevelEnum(String value) {
        this.value = value;
    }
}
