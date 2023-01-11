package openapisdk.models.operations;


public enum GetEditorUrl401ApplicationJsonErrorEnum {
    AUTHENTICATION_FAILED_REQUEST_EXPIRED("Authentication failed: request expired"),
    AUTHENTICATION_FAILED_SIGNATURE_OR_SECRET_MISSING("Authentication failed: signature or secret missing"),
    AUTHENTICATION_FAILED_WORKSPACE_MISSING("Authentication failed: workspace missing"),
    AUTHENTICATION_FAILED_KEY_MISSING("Authentication failed: key missing"),
    AUTHENTICATION_FAILED_PROPERTY_ISS_ISSUER_MISSING_IN_JWT("Authentication failed: property 'iss' (issuer) missing in JWT"),
    AUTHENTICATION_FAILED_PROPERTY_SUB_SUBJECT_MISSING_IN_JWT("Authentication failed: property 'sub' (subject) missing in JWT"),
    AUTHENTICATION_FAILED_PROPERTY_EXP_EXPIRATION_TIME_MISSING_IN_JWT("Authentication failed: property 'exp' (expiration time) missing in JWT"),
    AUTHENTICATION_FAILED_INVALID_ISS_ISSUER("Authentication failed: invalid 'iss' (issuer)"),
    AUTHENTICATION_FAILED_INCORRECT_SIGNATURE("Authentication failed: incorrect signature"),
    AUTHENTICATION_FAILED("Authentication failed");

    public final String value;

    private GetEditorUrl401ApplicationJsonErrorEnum(String value) {
        this.value = value;
    }
}
