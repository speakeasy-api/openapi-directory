package openapisdk.models.operations;


public enum CreateVodAlt1RequestBodyContentRatingEnum {
    DRUGS("drugs"),
    LANGUAGE("language"),
    NUDITY("nudity"),
    SAFE("safe"),
    UNRATED("unrated"),
    VIOLENCE("violence");

    public final String value;

    private CreateVodAlt1RequestBodyContentRatingEnum(String value) {
        this.value = value;
    }
}
