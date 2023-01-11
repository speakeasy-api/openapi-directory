package openapisdk.models.shared;


public enum VideoProcessingDetailsProcessingFailureReasonEnum {
    UPLOAD_FAILED("uploadFailed"),
    TRANSCODE_FAILED("transcodeFailed"),
    STREAMING_FAILED("streamingFailed"),
    OTHER("other");

    public final String value;

    private VideoProcessingDetailsProcessingFailureReasonEnum(String value) {
        this.value = value;
    }
}
