package openapisdk.models.shared;


public enum CaptionSnippetFailureReasonEnum {
    UNKNOWN_FORMAT("unknownFormat"),
    UNSUPPORTED_FORMAT("unsupportedFormat"),
    PROCESSING_FAILED("processingFailed");

    public final String value;

    private CaptionSnippetFailureReasonEnum(String value) {
        this.value = value;
    }
}
