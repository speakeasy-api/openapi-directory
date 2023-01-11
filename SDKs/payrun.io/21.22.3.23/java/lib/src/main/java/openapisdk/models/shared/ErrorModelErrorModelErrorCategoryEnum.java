package openapisdk.models.shared;


public enum ErrorModelErrorModelErrorCategoryEnum {
    GENERAL("General"),
    NOT_FOUND("NotFound"),
    NOT_AUTHORISED("NotAuthorised"),
    VALIDATION_FAILURE("ValidationFailure");

    public final String value;

    private ErrorModelErrorModelErrorCategoryEnum(String value) {
        this.value = value;
    }
}
