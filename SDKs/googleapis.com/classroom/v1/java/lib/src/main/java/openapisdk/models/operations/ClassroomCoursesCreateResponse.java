package openapisdk.models.operations;



public class ClassroomCoursesCreateResponse {
    public String contentType;
    public ClassroomCoursesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Course course;
    public ClassroomCoursesCreateResponse withCourse(openapisdk.models.shared.Course course) {
        this.course = course;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}