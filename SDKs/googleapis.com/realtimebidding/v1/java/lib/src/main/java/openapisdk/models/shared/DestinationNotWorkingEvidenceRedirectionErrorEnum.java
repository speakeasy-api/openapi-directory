package openapisdk.models.shared;


public enum DestinationNotWorkingEvidenceRedirectionErrorEnum {
    REDIRECTION_ERROR_UNSPECIFIED("REDIRECTION_ERROR_UNSPECIFIED"),
    TOO_MANY_REDIRECTS("TOO_MANY_REDIRECTS"),
    INVALID_REDIRECT("INVALID_REDIRECT"),
    EMPTY_REDIRECT("EMPTY_REDIRECT"),
    REDIRECT_ERROR_UNKNOWN("REDIRECT_ERROR_UNKNOWN");

    public final String value;

    private DestinationNotWorkingEvidenceRedirectionErrorEnum(String value) {
        this.value = value;
    }
}
