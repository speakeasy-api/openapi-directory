package openapisdk.models.shared;


public enum DeobfuscationFileSymbolTypeEnum {
    DEOBFUSCATION_FILE_TYPE_UNSPECIFIED("deobfuscationFileTypeUnspecified"),
    PROGUARD("proguard"),
    NATIVE_CODE("nativeCode");

    public final String value;

    private DeobfuscationFileSymbolTypeEnum(String value) {
        this.value = value;
    }
}
