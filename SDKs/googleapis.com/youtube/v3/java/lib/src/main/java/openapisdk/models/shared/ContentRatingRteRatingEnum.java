package openapisdk.models.shared;


public enum ContentRatingRteRatingEnum {
    RTE_UNSPECIFIED("rteUnspecified"),
    RTE_GA("rteGa"),
    RTE_CH("rteCh"),
    RTE_PS("rtePs"),
    RTE_MA("rteMa"),
    RTE_UNRATED("rteUnrated");

    public final String value;

    private ContentRatingRteRatingEnum(String value) {
        this.value = value;
    }
}
