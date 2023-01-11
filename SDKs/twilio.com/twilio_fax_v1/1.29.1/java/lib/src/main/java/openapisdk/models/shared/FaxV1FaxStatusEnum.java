package openapisdk.models.shared;


public enum FaxV1FaxStatusEnum {
    QUEUED("queued"),
    PROCESSING("processing"),
    SENDING("sending"),
    DELIVERED("delivered"),
    RECEIVING("receiving"),
    RECEIVED("received"),
    NO_ANSWER("no-answer"),
    BUSY("busy"),
    FAILED("failed"),
    CANCELED("canceled");

    public final String value;

    private FaxV1FaxStatusEnum(String value) {
        this.value = value;
    }
}
