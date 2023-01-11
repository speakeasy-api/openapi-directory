package openapisdk.models.shared;


public enum ImportResponseStateEnum {
    IMPORTING("IMPORTING"),
    FINISHED_SUCCESS("FINISHED_SUCCESS"),
    FINISHED_FAILED("FINISHED_FAILED");

    public final String value;

    private ImportResponseStateEnum(String value) {
        this.value = value;
    }
}
