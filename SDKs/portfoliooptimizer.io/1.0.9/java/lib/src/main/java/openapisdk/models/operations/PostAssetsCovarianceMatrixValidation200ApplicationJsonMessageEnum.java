package openapisdk.models.operations;


public enum PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum {
    VALID_COVARIANCE_MATRIX("valid covariance matrix"),
    INVALID_COVARIANCE_MATRIX_NON_SYMMETRIC_MATRIX("invalid covariance matrix - non symmetric matrix"),
    INVALID_COVARIANCE_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS("invalid covariance matrix - non positive diagonal elements"),
    INVALID_COVARIANCE_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX("invalid covariance matrix - non positive semi-definite matrix");

    public final String value;

    private PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum(String value) {
        this.value = value;
    }
}
