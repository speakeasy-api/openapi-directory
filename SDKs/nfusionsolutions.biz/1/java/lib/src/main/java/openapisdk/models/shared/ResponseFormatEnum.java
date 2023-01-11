package openapisdk.models.shared;


public enum ResponseFormatEnum {
    JSON("json"),
    XML("xml");

    public final String value;

    private ResponseFormatEnum(String value) {
        this.value = value;
    }
}
