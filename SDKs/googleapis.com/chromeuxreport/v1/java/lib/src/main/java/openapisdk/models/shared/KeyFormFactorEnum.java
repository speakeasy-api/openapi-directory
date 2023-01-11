package openapisdk.models.shared;


public enum KeyFormFactorEnum {
    ALL_FORM_FACTORS("ALL_FORM_FACTORS"),
    PHONE("PHONE"),
    DESKTOP("DESKTOP"),
    TABLET("TABLET");

    public final String value;

    private KeyFormFactorEnum(String value) {
        this.value = value;
    }
}
