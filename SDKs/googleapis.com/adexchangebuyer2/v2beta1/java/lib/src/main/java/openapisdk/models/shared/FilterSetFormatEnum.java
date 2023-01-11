package openapisdk.models.shared;


public enum FilterSetFormatEnum {
    FORMAT_UNSPECIFIED("FORMAT_UNSPECIFIED"),
    NATIVE_DISPLAY("NATIVE_DISPLAY"),
    NATIVE_VIDEO("NATIVE_VIDEO"),
    NON_NATIVE_DISPLAY("NON_NATIVE_DISPLAY"),
    NON_NATIVE_VIDEO("NON_NATIVE_VIDEO");

    public final String value;

    private FilterSetFormatEnum(String value) {
        this.value = value;
    }
}
