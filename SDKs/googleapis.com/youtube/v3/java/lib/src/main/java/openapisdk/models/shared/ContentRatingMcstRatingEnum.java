package openapisdk.models.shared;


public enum ContentRatingMcstRatingEnum {
    MCST_UNSPECIFIED("mcstUnspecified"),
    MCST_P("mcstP"),
    MCST0("mcst0"),
    MCST_C13("mcstC13"),
    MCST_C16("mcstC16"),
    MCST16PLUS("mcst16plus"),
    MCST_C18("mcstC18"),
    MCST_G_PG("mcstGPg"),
    MCST_UNRATED("mcstUnrated");

    public final String value;

    private ContentRatingMcstRatingEnum(String value) {
        this.value = value;
    }
}
