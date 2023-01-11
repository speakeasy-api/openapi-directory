package openapisdk.models.shared;


public enum ContentRatingMdaRatingEnum {
    MDA_UNSPECIFIED("mdaUnspecified"),
    MDA_G("mdaG"),
    MDA_PG("mdaPg"),
    MDA_PG13("mdaPg13"),
    MDA_NC16("mdaNc16"),
    MDA_M18("mdaM18"),
    MDA_R21("mdaR21"),
    MDA_UNRATED("mdaUnrated");

    public final String value;

    private ContentRatingMdaRatingEnum(String value) {
        this.value = value;
    }
}
