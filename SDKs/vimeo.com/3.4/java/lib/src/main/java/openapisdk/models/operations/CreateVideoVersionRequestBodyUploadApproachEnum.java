package openapisdk.models.operations;


public enum CreateVideoVersionRequestBodyUploadApproachEnum {
    POST("post"),
    PULL("pull"),
    STREAMING("streaming"),
    TUS("tus");

    public final String value;

    private CreateVideoVersionRequestBodyUploadApproachEnum(String value) {
        this.value = value;
    }
}
