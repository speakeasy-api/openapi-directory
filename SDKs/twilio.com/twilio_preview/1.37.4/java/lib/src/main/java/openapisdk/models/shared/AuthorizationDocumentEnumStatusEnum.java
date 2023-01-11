package openapisdk.models.shared;


public enum AuthorizationDocumentEnumStatusEnum {
    OPENED("opened"),
    SIGNING("signing"),
    SIGNED("signed"),
    CANCELED("canceled"),
    FAILED("failed");

    public final String value;

    private AuthorizationDocumentEnumStatusEnum(String value) {
        this.value = value;
    }
}
