package openapisdk.models.shared;


public enum CourseWorkMaterialStateEnum {
    COURSEWORK_MATERIAL_STATE_UNSPECIFIED("COURSEWORK_MATERIAL_STATE_UNSPECIFIED"),
    PUBLISHED("PUBLISHED"),
    DRAFT("DRAFT"),
    DELETED("DELETED");

    public final String value;

    private CourseWorkMaterialStateEnum(String value) {
        this.value = value;
    }
}
