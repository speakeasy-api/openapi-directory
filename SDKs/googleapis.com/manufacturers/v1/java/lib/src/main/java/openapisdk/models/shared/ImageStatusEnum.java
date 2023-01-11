package openapisdk.models.shared;


public enum ImageStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    PENDING_PROCESSING("PENDING_PROCESSING"),
    PENDING_CRAWL("PENDING_CRAWL"),
    OK("OK"),
    ROBOTED("ROBOTED"),
    XROBOTED("XROBOTED"),
    CRAWL_ERROR("CRAWL_ERROR"),
    PROCESSING_ERROR("PROCESSING_ERROR"),
    DECODING_ERROR("DECODING_ERROR"),
    TOO_BIG("TOO_BIG"),
    CRAWL_SKIPPED("CRAWL_SKIPPED"),
    HOSTLOADED("HOSTLOADED"),
    HTTP404("HTTP_404");

    public final String value;

    private ImageStatusEnum(String value) {
        this.value = value;
    }
}
