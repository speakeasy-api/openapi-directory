package openapisdk.models.operations;


public enum CreateDatasetRequestBodyTypeEnum {
    IMAGE("image"),
    IMAGE_MULTI_LABEL("image-multi-label");

    public final String value;

    private CreateDatasetRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
