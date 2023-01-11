package openapisdk.models.shared;


public enum SiteStatusValueEnum {
    ACTIVE("active"),
    PLANNED("planned"),
    RETIRED("retired");

    public final String value;

    private SiteStatusValueEnum(String value) {
        this.value = value;
    }
}
