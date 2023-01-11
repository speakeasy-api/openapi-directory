package openapisdk.models.shared;


public enum AssignmentJobTypeEnum {
    JOB_TYPE_UNSPECIFIED("JOB_TYPE_UNSPECIFIED"),
    PIPELINE("PIPELINE"),
    QUERY("QUERY"),
    ML_EXTERNAL("ML_EXTERNAL"),
    BACKGROUND("BACKGROUND");

    public final String value;

    private AssignmentJobTypeEnum(String value) {
        this.value = value;
    }
}
