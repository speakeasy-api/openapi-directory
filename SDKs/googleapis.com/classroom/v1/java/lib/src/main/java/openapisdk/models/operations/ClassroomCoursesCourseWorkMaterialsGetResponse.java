package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkMaterialsGetResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkMaterialsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseWorkMaterial courseWorkMaterial;
    public ClassroomCoursesCourseWorkMaterialsGetResponse withCourseWorkMaterial(openapisdk.models.shared.CourseWorkMaterial courseWorkMaterial) {
        this.courseWorkMaterial = courseWorkMaterial;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkMaterialsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}