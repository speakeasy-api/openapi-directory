package openapisdk.models.shared;


public enum ServiceMeshAnalysisMessageBaseLevelEnum {
    LEVEL_UNSPECIFIED("LEVEL_UNSPECIFIED"),
    ERROR("ERROR"),
    WARNING("WARNING"),
    INFO("INFO");

    public final String value;

    private ServiceMeshAnalysisMessageBaseLevelEnum(String value) {
        this.value = value;
    }
}
