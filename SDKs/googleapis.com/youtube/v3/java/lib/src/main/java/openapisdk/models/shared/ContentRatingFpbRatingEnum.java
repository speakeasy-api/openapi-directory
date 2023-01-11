package openapisdk.models.shared;


public enum ContentRatingFpbRatingEnum {
    FPB_UNSPECIFIED("fpbUnspecified"),
    FPB_A("fpbA"),
    FPB_PG("fpbPg"),
    FPB79_PG("fpb79Pg"),
    FPB1012_PG("fpb1012Pg"),
    FPB13("fpb13"),
    FPB16("fpb16"),
    FPB18("fpb18"),
    FPB_X18("fpbX18"),
    FPB_XX("fpbXx"),
    FPB_UNRATED("fpbUnrated"),
    FPB10("fpb10");

    public final String value;

    private ContentRatingFpbRatingEnum(String value) {
        this.value = value;
    }
}
