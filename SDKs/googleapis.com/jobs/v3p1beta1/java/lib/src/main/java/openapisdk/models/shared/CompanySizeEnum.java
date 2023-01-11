package openapisdk.models.shared;


public enum CompanySizeEnum {
    COMPANY_SIZE_UNSPECIFIED("COMPANY_SIZE_UNSPECIFIED"),
    MINI("MINI"),
    SMALL("SMALL"),
    SMEDIUM("SMEDIUM"),
    MEDIUM("MEDIUM"),
    BIG("BIG"),
    BIGGER("BIGGER"),
    GIANT("GIANT");

    public final String value;

    private CompanySizeEnum(String value) {
        this.value = value;
    }
}
