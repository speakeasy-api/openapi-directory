package openapisdk.models.shared;


public enum DomainTypeEnum {
    CLASSIFICATION("Classification"),
    OBJECT_DETECTION("ObjectDetection");

    public final String value;

    private DomainTypeEnum(String value) {
        this.value = value;
    }
}
