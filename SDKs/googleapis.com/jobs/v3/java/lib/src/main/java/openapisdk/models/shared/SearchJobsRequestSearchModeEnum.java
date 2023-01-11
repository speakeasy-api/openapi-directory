package openapisdk.models.shared;


public enum SearchJobsRequestSearchModeEnum {
    SEARCH_MODE_UNSPECIFIED("SEARCH_MODE_UNSPECIFIED"),
    JOB_SEARCH("JOB_SEARCH"),
    FEATURED_JOB_SEARCH("FEATURED_JOB_SEARCH");

    public final String value;

    private SearchJobsRequestSearchModeEnum(String value) {
        this.value = value;
    }
}
