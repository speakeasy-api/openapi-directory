package openapisdk.models.shared;


public enum PatientAuthPurposeEnum {
    LINK("LINK"),
    KYC("KYC"),
    KYC_AND_LINK("KYC_AND_LINK");

    public final String value;

    private PatientAuthPurposeEnum(String value) {
        this.value = value;
    }
}
