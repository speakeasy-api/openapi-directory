package openapisdk.models.shared;


public enum ContentRatingSmaisRatingEnum {
    SMAIS_UNSPECIFIED("smaisUnspecified"),
    SMAIS_L("smaisL"),
    SMAIS7("smais7"),
    SMAIS12("smais12"),
    SMAIS14("smais14"),
    SMAIS16("smais16"),
    SMAIS18("smais18"),
    SMAIS_UNRATED("smaisUnrated");

    public final String value;

    private ContentRatingSmaisRatingEnum(String value) {
        this.value = value;
    }
}
