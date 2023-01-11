package openapisdk.models.shared;


public enum ProjectStatusEnum {
    SUCCEEDED("Succeeded"),
    IMPORTING("Importing"),
    FAILED("Failed");

    public final String value;

    private ProjectStatusEnum(String value) {
        this.value = value;
    }
}
