package openapisdk.models.shared;


public enum VideoStatusUploadStatusEnum {
    UPLOADED("uploaded"),
    PROCESSED("processed"),
    FAILED("failed"),
    REJECTED("rejected"),
    DELETED("deleted");

    public final String value;

    private VideoStatusUploadStatusEnum(String value) {
        this.value = value;
    }
}
