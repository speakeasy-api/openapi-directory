package openapisdk.models.shared;


public enum SupportingDocumentEnumStatusEnum {
    DRAFT("draft"),
    PENDING_REVIEW("pending-review"),
    REJECTED("rejected"),
    APPROVED("approved"),
    EXPIRED("expired"),
    PROVISIONALLY_APPROVED("provisionally-approved");

    public final String value;

    private SupportingDocumentEnumStatusEnum(String value) {
        this.value = value;
    }
}
