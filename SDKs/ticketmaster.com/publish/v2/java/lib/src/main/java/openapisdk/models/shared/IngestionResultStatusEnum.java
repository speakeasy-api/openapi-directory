package openapisdk.models.shared;


public enum IngestionResultStatusEnum {
    ERROR("Error"),
    SUCCESS_WARNING("SuccessWarning"),
    SUCCESS("Success");

    public final String value;

    private IngestionResultStatusEnum(String value) {
        this.value = value;
    }
}
