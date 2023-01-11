package openapisdk.models.operations;


public enum UploadDatasetAsync1RequestBodyTypeEnum {
    IMAGE("image"),
    IMAGE_DETECTION("image-detection"),
    IMAGE_MULTI_LABEL("image-multi-label");

    public final String value;

    private UploadDatasetAsync1RequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
