package openapisdk.models.shared;


public enum GetIosPostInstallAttributionRequestRetrievalMethodEnum {
    UNKNOWN_PAYLOAD_RETRIEVAL_METHOD("UNKNOWN_PAYLOAD_RETRIEVAL_METHOD"),
    IMPLICIT_WEAK_MATCH("IMPLICIT_WEAK_MATCH"),
    EXPLICIT_WEAK_MATCH("EXPLICIT_WEAK_MATCH"),
    EXPLICIT_STRONG_AFTER_WEAK_MATCH("EXPLICIT_STRONG_AFTER_WEAK_MATCH");

    public final String value;

    private GetIosPostInstallAttributionRequestRetrievalMethodEnum(String value) {
        this.value = value;
    }
}
