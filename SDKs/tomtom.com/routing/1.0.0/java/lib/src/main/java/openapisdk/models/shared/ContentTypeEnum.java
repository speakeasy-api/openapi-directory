package openapisdk.models.shared;


public enum ContentTypeEnum {
    XML("xml"),
    JSON("json"),
    JSONP("jsonp");

    public final String value;

    private ContentTypeEnum(String value) {
        this.value = value;
    }
}
