package openapisdk.models.shared;


public enum TransferParametersSupportedPrivacyEnum {
    CONTACT_PRIVACY_UNSPECIFIED("CONTACT_PRIVACY_UNSPECIFIED"),
    PUBLIC_CONTACT_DATA("PUBLIC_CONTACT_DATA"),
    PRIVATE_CONTACT_DATA("PRIVATE_CONTACT_DATA"),
    REDACTED_CONTACT_DATA("REDACTED_CONTACT_DATA");

    public final String value;

    private TransferParametersSupportedPrivacyEnum(String value) {
        this.value = value;
    }
}
