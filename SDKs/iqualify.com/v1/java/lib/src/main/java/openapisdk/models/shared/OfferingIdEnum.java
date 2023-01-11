package openapisdk.models.shared;


public enum OfferingIdEnum {
    SUBMIT_TEXT("submit_text"),
    MCQ("MCQ"),
    SPATIAL_TRIANGULAR("spatial_triangular"),
    SPATIAL_PLANAR("spatial_planar"),
    SPATIAL_LINEAR("spatial_linear");

    public final String value;

    private OfferingIdEnum(String value) {
        this.value = value;
    }
}
