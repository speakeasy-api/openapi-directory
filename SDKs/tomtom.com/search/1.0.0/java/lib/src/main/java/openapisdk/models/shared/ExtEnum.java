package openapisdk.models.shared;


public enum ExtEnum {
    JSON("json"),
    JSONP("jsonp"),
    JS("js"),
    XML("xml");

    public final String value;

    private ExtEnum(String value) {
        this.value = value;
    }
}
