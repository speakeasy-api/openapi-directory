package openapisdk.models.operations;


public enum PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum {
    VALID_CORRELATION_MATRIX("valid correlation matrix"),
    INVALID_CORRELATION_MATRIX_NON_SYMMETRIC_MATRIX("invalid correlation matrix - non symmetric matrix"),
    INVALID_CORRELATION_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS("invalid correlation matrix - non positive diagonal elements"),
    INVALID_CORRELATION_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX("invalid correlation matrix - non positive semi-definite matrix");

    public final String value;

    private PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum(String value) {
        this.value = value;
    }
}
