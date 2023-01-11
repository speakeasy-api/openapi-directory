package openapisdk.models.shared;


public enum OutputEnum {
    BASE64("base64"),
    URL("url"),
    I("I");

    public final String value;

    private OutputEnum(String value) {
        this.value = value;
    }
}
