package openapisdk.models.shared;


public enum PublicKeyCredentialFormatEnum {
    UNSPECIFIED_PUBLIC_KEY_FORMAT("UNSPECIFIED_PUBLIC_KEY_FORMAT"),
    RSA_PEM("RSA_PEM"),
    RSA_X509_PEM("RSA_X509_PEM"),
    ES256_PEM("ES256_PEM"),
    ES256_X509_PEM("ES256_X509_PEM");

    public final String value;

    private PublicKeyCredentialFormatEnum(String value) {
        this.value = value;
    }
}
