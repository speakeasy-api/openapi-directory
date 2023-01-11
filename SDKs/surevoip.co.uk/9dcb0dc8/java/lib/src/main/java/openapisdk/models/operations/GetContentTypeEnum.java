package openapisdk.models.operations;


public enum GetContentTypeEnum {
    APPLICATION_JSON("application/json"),
    TEXT_HTML("text/html"),
    TEXT_XML("text/xml"),
    APPLICATION_XML("application/xml");

    public final String value;

    private GetContentTypeEnum(String value) {
        this.value = value;
    }
}
