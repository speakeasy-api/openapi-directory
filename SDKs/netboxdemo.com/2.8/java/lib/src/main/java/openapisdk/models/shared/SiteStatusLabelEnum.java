package openapisdk.models.shared;


public enum SiteStatusLabelEnum {
    ACTIVE("Active"),
    PLANNED("Planned"),
    RETIRED("Retired");

    public final String value;

    private SiteStatusLabelEnum(String value) {
        this.value = value;
    }
}
