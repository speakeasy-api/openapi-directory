package openapisdk.models.shared;


public enum CertificateExtensionConstraintsKnownExtensionsEnum {
    KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED("KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED"),
    BASE_KEY_USAGE("BASE_KEY_USAGE"),
    EXTENDED_KEY_USAGE("EXTENDED_KEY_USAGE"),
    CA_OPTIONS("CA_OPTIONS"),
    POLICY_IDS("POLICY_IDS"),
    AIA_OCSP_SERVERS("AIA_OCSP_SERVERS");

    public final String value;

    private CertificateExtensionConstraintsKnownExtensionsEnum(String value) {
        this.value = value;
    }
}
