package openapisdk.models.shared;


public enum SearchJobsRequestJobViewEnum {
    JOB_VIEW_UNSPECIFIED("JOB_VIEW_UNSPECIFIED"),
    JOB_VIEW_ID_ONLY("JOB_VIEW_ID_ONLY"),
    JOB_VIEW_MINIMAL("JOB_VIEW_MINIMAL"),
    JOB_VIEW_SMALL("JOB_VIEW_SMALL"),
    JOB_VIEW_FULL("JOB_VIEW_FULL");

    public final String value;

    private SearchJobsRequestJobViewEnum(String value) {
        this.value = value;
    }
}
