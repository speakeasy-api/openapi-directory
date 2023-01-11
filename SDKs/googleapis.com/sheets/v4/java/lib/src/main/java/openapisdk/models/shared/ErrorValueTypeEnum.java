package openapisdk.models.shared;


public enum ErrorValueTypeEnum {
    ERROR_TYPE_UNSPECIFIED("ERROR_TYPE_UNSPECIFIED"),
    ERROR("ERROR"),
    NULL_VALUE("NULL_VALUE"),
    DIVIDE_BY_ZERO("DIVIDE_BY_ZERO"),
    VALUE("VALUE"),
    REF("REF"),
    NAME("NAME"),
    NUM("NUM"),
    NA("N_A"),
    LOADING("LOADING");

    public final String value;

    private ErrorValueTypeEnum(String value) {
        this.value = value;
    }
}
