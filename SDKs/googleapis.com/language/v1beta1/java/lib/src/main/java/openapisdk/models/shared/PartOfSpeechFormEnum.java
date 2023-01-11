package openapisdk.models.shared;


public enum PartOfSpeechFormEnum {
    FORM_UNKNOWN("FORM_UNKNOWN"),
    ADNOMIAL("ADNOMIAL"),
    AUXILIARY("AUXILIARY"),
    COMPLEMENTIZER("COMPLEMENTIZER"),
    FINAL_ENDING("FINAL_ENDING"),
    GERUND("GERUND"),
    REALIS("REALIS"),
    IRREALIS("IRREALIS"),
    SHORT_("SHORT"),
    LONG_("LONG"),
    ORDER("ORDER"),
    SPECIFIC("SPECIFIC");

    public final String value;

    private PartOfSpeechFormEnum(String value) {
        this.value = value;
    }
}
