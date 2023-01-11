package openapisdk.models.shared;


public enum ContentRatingKmrbRatingEnum {
    KMRB_UNSPECIFIED("kmrbUnspecified"),
    KMRB_ALL("kmrbAll"),
    KMRB12PLUS("kmrb12plus"),
    KMRB15PLUS("kmrb15plus"),
    KMRB_TEENR("kmrbTeenr"),
    KMRB_R("kmrbR"),
    KMRB_UNRATED("kmrbUnrated");

    public final String value;

    private ContentRatingKmrbRatingEnum(String value) {
        this.value = value;
    }
}
