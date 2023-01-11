package openapisdk.models.shared;


public enum PredictionQueryTokenOrderByEnum {
    NEWEST("Newest"),
    OLDEST("Oldest"),
    SUGGESTED("Suggested");

    public final String value;

    private PredictionQueryTokenOrderByEnum(String value) {
        this.value = value;
    }
}
