package openapisdk.models.shared;


public enum PageStatusEnum {
    LIVE("LIVE"),
    DRAFT("DRAFT"),
    SOFT_TRASHED("SOFT_TRASHED");

    public final String value;

    private PageStatusEnum(String value) {
        this.value = value;
    }
}
