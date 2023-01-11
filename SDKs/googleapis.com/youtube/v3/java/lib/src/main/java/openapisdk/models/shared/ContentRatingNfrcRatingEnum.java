package openapisdk.models.shared;


public enum ContentRatingNfrcRatingEnum {
    NFRC_UNSPECIFIED("nfrcUnspecified"),
    NFRC_A("nfrcA"),
    NFRC_B("nfrcB"),
    NFRC_C("nfrcC"),
    NFRC_D("nfrcD"),
    NFRC_X("nfrcX"),
    NFRC_UNRATED("nfrcUnrated");

    public final String value;

    private ContentRatingNfrcRatingEnum(String value) {
        this.value = value;
    }
}
