package openapisdk.models.shared;


public enum GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum {
    FEATURE_UNSPECIFIED("FEATURE_UNSPECIFIED"),
    CLASSIFICATION("CLASSIFICATION"),
    BOUNDING_BOX("BOUNDING_BOX"),
    ORIENTED_BOUNDING_BOX("ORIENTED_BOUNDING_BOX"),
    BOUNDING_POLY("BOUNDING_POLY"),
    POLYLINE("POLYLINE"),
    SEGMENTATION("SEGMENTATION");

    public final String value;

    private GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum(String value) {
        this.value = value;
    }
}
