package openapisdk.models.operations;


public enum SearchCseListImgTypeEnum {
    IMG_TYPE_UNDEFINED("imgTypeUndefined"),
    CLIPART("clipart"),
    FACE("face"),
    LINEART("lineart"),
    STOCK("stock"),
    PHOTO("photo"),
    ANIMATED("animated");

    public final String value;

    private SearchCseListImgTypeEnum(String value) {
        this.value = value;
    }
}
