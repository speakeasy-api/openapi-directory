package openapisdk.models.shared;


public enum AttributeParametersScoreTypeEnum {
    SCORE_TYPE_UNSPECIFIED("SCORE_TYPE_UNSPECIFIED"),
    PROBABILITY("PROBABILITY"),
    STD_DEV_SCORE("STD_DEV_SCORE"),
    PERCENTILE("PERCENTILE"),
    RAW("RAW");

    public final String value;

    private AttributeParametersScoreTypeEnum(String value) {
        this.value = value;
    }
}
