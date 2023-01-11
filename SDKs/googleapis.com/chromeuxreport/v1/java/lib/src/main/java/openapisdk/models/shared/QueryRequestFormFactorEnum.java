package openapisdk.models.shared;


public enum QueryRequestFormFactorEnum {
    ALL_FORM_FACTORS("ALL_FORM_FACTORS"),
    PHONE("PHONE"),
    DESKTOP("DESKTOP"),
    TABLET("TABLET");

    public final String value;

    private QueryRequestFormFactorEnum(String value) {
        this.value = value;
    }
}
