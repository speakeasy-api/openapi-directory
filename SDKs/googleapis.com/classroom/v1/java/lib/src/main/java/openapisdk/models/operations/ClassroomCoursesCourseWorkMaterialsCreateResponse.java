package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkMaterialsCreateResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkMaterialsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseWorkMaterial courseWorkMaterial;
    public ClassroomCoursesCourseWorkMaterialsCreateResponse withCourseWorkMaterial(openapisdk.models.shared.CourseWorkMaterial courseWorkMaterial) {
        this.courseWorkMaterial = courseWorkMaterial;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkMaterialsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}