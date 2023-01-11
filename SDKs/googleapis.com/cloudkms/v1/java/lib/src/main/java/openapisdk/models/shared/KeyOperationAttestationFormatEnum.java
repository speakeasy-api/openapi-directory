package openapisdk.models.shared;


public enum KeyOperationAttestationFormatEnum {
    ATTESTATION_FORMAT_UNSPECIFIED("ATTESTATION_FORMAT_UNSPECIFIED"),
    CAVIUM_V1_COMPRESSED("CAVIUM_V1_COMPRESSED"),
    CAVIUM_V2_COMPRESSED("CAVIUM_V2_COMPRESSED");

    public final String value;

    private KeyOperationAttestationFormatEnum(String value) {
        this.value = value;
    }
}
