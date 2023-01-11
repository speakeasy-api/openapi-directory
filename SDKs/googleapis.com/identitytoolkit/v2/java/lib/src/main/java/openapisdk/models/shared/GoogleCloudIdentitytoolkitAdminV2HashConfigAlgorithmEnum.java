package openapisdk.models.shared;


public enum GoogleCloudIdentitytoolkitAdminV2HashConfigAlgorithmEnum {
    HASH_ALGORITHM_UNSPECIFIED("HASH_ALGORITHM_UNSPECIFIED"),
    HMAC_SHA256("HMAC_SHA256"),
    HMAC_SHA1("HMAC_SHA1"),
    HMAC_MD5("HMAC_MD5"),
    SCRYPT("SCRYPT"),
    PBKDF_SHA1("PBKDF_SHA1"),
    MD5("MD5"),
    HMAC_SHA512("HMAC_SHA512"),
    SHA1("SHA1"),
    BCRYPT("BCRYPT"),
    PBKDF2_SHA256("PBKDF2_SHA256"),
    SHA256("SHA256"),
    SHA512("SHA512"),
    STANDARD_SCRYPT("STANDARD_SCRYPT");

    public final String value;

    private GoogleCloudIdentitytoolkitAdminV2HashConfigAlgorithmEnum(String value) {
        this.value = value;
    }
}
