package openapisdk.models.shared;


public enum KycStateEnum {
    FAILED_KYC("FAILED_KYC"),
    PASSED_KYC("PASSED_KYC"),
    REQUIRES_KYC("REQUIRES_KYC");

    public final String value;

    private KycStateEnum(String value) {
        this.value = value;
    }
}
