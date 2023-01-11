package openapisdk.models.operations;


public enum BooksVolumesUseruploadedListProcessingStateEnum {
    PROCESSING_STATE_UNDEFINED("PROCESSING_STATE_UNDEFINED"),
    COMPLETED_FAILED("COMPLETED_FAILED"),
    COMPLETED_SUCCESS("COMPLETED_SUCCESS"),
    RUNNING("RUNNING");

    public final String value;

    private BooksVolumesUseruploadedListProcessingStateEnum(String value) {
        this.value = value;
    }
}
