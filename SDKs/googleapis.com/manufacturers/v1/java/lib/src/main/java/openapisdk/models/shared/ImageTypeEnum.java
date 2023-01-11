package openapisdk.models.shared;


public enum ImageTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    CRAWLED("CRAWLED"),
    UPLOADED("UPLOADED");

    public final String value;

    private ImageTypeEnum(String value) {
        this.value = value;
    }
}
