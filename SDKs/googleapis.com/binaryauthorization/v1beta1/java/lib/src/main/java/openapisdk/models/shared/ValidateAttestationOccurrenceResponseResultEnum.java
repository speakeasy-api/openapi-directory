package openapisdk.models.shared;


public enum ValidateAttestationOccurrenceResponseResultEnum {
    RESULT_UNSPECIFIED("RESULT_UNSPECIFIED"),
    VERIFIED("VERIFIED"),
    ATTESTATION_NOT_VERIFIABLE("ATTESTATION_NOT_VERIFIABLE");

    public final String value;

    private ValidateAttestationOccurrenceResponseResultEnum(String value) {
        this.value = value;
    }
}
