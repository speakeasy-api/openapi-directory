package openapisdk.models.shared;


public enum ContentRatingFcoRatingEnum {
    FCO_UNSPECIFIED("fcoUnspecified"),
    FCO_I("fcoI"),
    FCO_IIA("fcoIia"),
    FCO_IIB("fcoIib"),
    FCO_II("fcoIi"),
    FCO_III("fcoIii"),
    FCO_UNRATED("fcoUnrated");

    public final String value;

    private ContentRatingFcoRatingEnum(String value) {
        this.value = value;
    }
}
