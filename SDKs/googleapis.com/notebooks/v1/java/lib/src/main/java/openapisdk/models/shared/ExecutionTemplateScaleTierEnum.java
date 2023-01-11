package openapisdk.models.shared;


public enum ExecutionTemplateScaleTierEnum {
    SCALE_TIER_UNSPECIFIED("SCALE_TIER_UNSPECIFIED"),
    BASIC("BASIC"),
    STANDARD1("STANDARD_1"),
    PREMIUM1("PREMIUM_1"),
    BASIC_GPU("BASIC_GPU"),
    BASIC_TPU("BASIC_TPU"),
    CUSTOM("CUSTOM");

    public final String value;

    private ExecutionTemplateScaleTierEnum(String value) {
        this.value = value;
    }
}
