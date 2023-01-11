package openapisdk.models.shared;


public enum GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    CLAIMED("CLAIMED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    DISMISSED("DISMISSED");

    public final String value;

    private GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum(String value) {
        this.value = value;
    }
}
