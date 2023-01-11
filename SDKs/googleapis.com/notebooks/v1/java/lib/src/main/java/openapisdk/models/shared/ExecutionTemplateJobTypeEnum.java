package openapisdk.models.shared;


public enum ExecutionTemplateJobTypeEnum {
    JOB_TYPE_UNSPECIFIED("JOB_TYPE_UNSPECIFIED"),
    VERTEX_AI("VERTEX_AI"),
    DATAPROC("DATAPROC");

    public final String value;

    private ExecutionTemplateJobTypeEnum(String value) {
        this.value = value;
    }
}
