package openapisdk.models.shared;


public enum CreativeOptimizationConfigurationOptimizationModelEnum {
    CLICK("CLICK"),
    POST_CLICK("POST_CLICK"),
    POST_IMPRESSION("POST_IMPRESSION"),
    POST_CLICK_AND_IMPRESSION("POST_CLICK_AND_IMPRESSION"),
    VIDEO_COMPLETION("VIDEO_COMPLETION");

    public final String value;

    private CreativeOptimizationConfigurationOptimizationModelEnum(String value) {
        this.value = value;
    }
}
