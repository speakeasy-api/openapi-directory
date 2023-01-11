package openapisdk.models.shared;


public enum ParentEntityFilterFileTypeEnum {
    FILE_TYPE_UNSPECIFIED("FILE_TYPE_UNSPECIFIED"),
    FILE_TYPE_CAMPAIGN("FILE_TYPE_CAMPAIGN"),
    FILE_TYPE_MEDIA_PRODUCT("FILE_TYPE_MEDIA_PRODUCT"),
    FILE_TYPE_INSERTION_ORDER("FILE_TYPE_INSERTION_ORDER"),
    FILE_TYPE_LINE_ITEM("FILE_TYPE_LINE_ITEM"),
    FILE_TYPE_AD_GROUP("FILE_TYPE_AD_GROUP"),
    FILE_TYPE_AD("FILE_TYPE_AD");

    public final String value;

    private ParentEntityFilterFileTypeEnum(String value) {
        this.value = value;
    }
}
