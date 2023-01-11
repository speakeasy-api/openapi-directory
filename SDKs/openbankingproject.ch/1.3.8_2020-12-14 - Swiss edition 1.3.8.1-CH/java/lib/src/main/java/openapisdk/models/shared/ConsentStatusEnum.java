package openapisdk.models.shared;


public enum ConsentStatusEnum {
    RECEIVED("received"),
    REJECTED("rejected"),
    VALID("valid"),
    REVOKED_BY_PSU("revokedByPsu"),
    EXPIRED("expired"),
    TERMINATED_BY_TPP("terminatedByTpp"),
    PARTIALLY_AUTHORISED("partiallyAuthorised");

    public final String value;

    private ConsentStatusEnum(String value) {
        this.value = value;
    }
}
