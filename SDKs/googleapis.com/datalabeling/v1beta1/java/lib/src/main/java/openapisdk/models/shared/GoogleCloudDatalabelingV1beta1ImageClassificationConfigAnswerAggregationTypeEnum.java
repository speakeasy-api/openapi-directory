package openapisdk.models.shared;


public enum GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum {
    STRING_AGGREGATION_TYPE_UNSPECIFIED("STRING_AGGREGATION_TYPE_UNSPECIFIED"),
    MAJORITY_VOTE("MAJORITY_VOTE"),
    UNANIMOUS_VOTE("UNANIMOUS_VOTE"),
    NO_AGGREGATION("NO_AGGREGATION");

    public final String value;

    private GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum(String value) {
        this.value = value;
    }
}
