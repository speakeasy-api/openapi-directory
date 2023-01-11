package openapisdk.models.operations;


public enum BooksVolumesMybooksListProcessingStateEnum {
    PROCESSING_STATE_UNDEFINED("PROCESSING_STATE_UNDEFINED"),
    COMPLETED_FAILED("COMPLETED_FAILED"),
    COMPLETED_SUCCESS("COMPLETED_SUCCESS"),
    RUNNING("RUNNING");

    public final String value;

    private BooksVolumesMybooksListProcessingStateEnum(String value) {
        this.value = value;
    }
}
