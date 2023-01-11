package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkMaterialsPatchResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkMaterialsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseWorkMaterial courseWorkMaterial;
    public ClassroomCoursesCourseWorkMaterialsPatchResponse withCourseWorkMaterial(openapisdk.models.shared.CourseWorkMaterial courseWorkMaterial) {
        this.courseWorkMaterial = courseWorkMaterial;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkMaterialsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}