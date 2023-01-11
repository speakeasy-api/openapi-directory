package openapisdk.models.shared;


public enum FeatureStateCodeEnum {
    CODE_UNSPECIFIED("CODE_UNSPECIFIED"),
    OK("OK"),
    WARNING("WARNING"),
    ERROR("ERROR");

    public final String value;

    private FeatureStateCodeEnum(String value) {
        this.value = value;
    }
}
