package openapisdk.models.operations;


public enum CreateVodRequestBodyContentRatingEnum {
    DRUGS("drugs"),
    LANGUAGE("language"),
    NUDITY("nudity"),
    SAFE("safe"),
    UNRATED("unrated"),
    VIOLENCE("violence");

    public final String value;

    private CreateVodRequestBodyContentRatingEnum(String value) {
        this.value = value;
    }
}
