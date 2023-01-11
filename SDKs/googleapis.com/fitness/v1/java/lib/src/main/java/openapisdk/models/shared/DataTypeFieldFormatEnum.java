package openapisdk.models.shared;


public enum DataTypeFieldFormatEnum {
    INTEGER("integer"),
    FLOAT_POINT("floatPoint"),
    STRING("string"),
    MAP("map"),
    INTEGER_LIST("integerList"),
    FLOAT_LIST("floatList"),
    BLOB("blob");

    public final String value;

    private DataTypeFieldFormatEnum(String value) {
        this.value = value;
    }
}
