package openapisdk.models.operations;


public enum UploadDatasetSync1RequestBodyTypeEnum {
    IMAGE("image"),
    IMAGE_DETECTION("image-detection"),
    IMAGE_MULTI_LABEL("image-multi-label");

    public final String value;

    private UploadDatasetSync1RequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
