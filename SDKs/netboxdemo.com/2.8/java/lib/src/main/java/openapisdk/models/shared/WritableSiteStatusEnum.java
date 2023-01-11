package openapisdk.models.shared;


public enum WritableSiteStatusEnum {
    ACTIVE("active"),
    PLANNED("planned"),
    RETIRED("retired");

    public final String value;

    private WritableSiteStatusEnum(String value) {
        this.value = value;
    }
}
