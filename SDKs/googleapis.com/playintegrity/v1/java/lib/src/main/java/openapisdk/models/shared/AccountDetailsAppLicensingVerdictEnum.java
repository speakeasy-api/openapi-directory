package openapisdk.models.shared;


public enum AccountDetailsAppLicensingVerdictEnum {
    UNKNOWN("UNKNOWN"),
    LICENSED("LICENSED"),
    UNLICENSED("UNLICENSED"),
    UNEVALUATED("UNEVALUATED");

    public final String value;

    private AccountDetailsAppLicensingVerdictEnum(String value) {
        this.value = value;
    }
}
