package openapisdk.models.shared;


public enum GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum {
    FEATURE_UNSPECIFIED("FEATURE_UNSPECIFIED"),
    CLASSIFICATION("CLASSIFICATION"),
    OBJECT_DETECTION("OBJECT_DETECTION"),
    OBJECT_TRACKING("OBJECT_TRACKING"),
    EVENT("EVENT");

    public final String value;

    private GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum(String value) {
        this.value = value;
    }
}
