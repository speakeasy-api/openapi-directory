package openapisdk.models.shared;


public enum ServiceAccountKeyKeyAlgorithmEnum {
    KEY_ALG_UNSPECIFIED("KEY_ALG_UNSPECIFIED"),
    KEY_ALG_RSA1024("KEY_ALG_RSA_1024"),
    KEY_ALG_RSA2048("KEY_ALG_RSA_2048");

    public final String value;

    private ServiceAccountKeyKeyAlgorithmEnum(String value) {
        this.value = value;
    }
}
