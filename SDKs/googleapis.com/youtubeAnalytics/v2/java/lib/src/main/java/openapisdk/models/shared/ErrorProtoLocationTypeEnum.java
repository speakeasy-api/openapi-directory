package openapisdk.models.shared;


public enum ErrorProtoLocationTypeEnum {
    PATH("PATH"),
    OTHER("OTHER"),
    PARAMETER("PARAMETER");

    public final String value;

    private ErrorProtoLocationTypeEnum(String value) {
        this.value = value;
    }
}
