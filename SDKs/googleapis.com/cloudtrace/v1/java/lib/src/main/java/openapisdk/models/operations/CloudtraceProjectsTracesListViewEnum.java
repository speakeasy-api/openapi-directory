package openapisdk.models.operations;


public enum CloudtraceProjectsTracesListViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    MINIMAL("MINIMAL"),
    ROOTSPAN("ROOTSPAN"),
    COMPLETE("COMPLETE");

    public final String value;

    private CloudtraceProjectsTracesListViewEnum(String value) {
        this.value = value;
    }
}
