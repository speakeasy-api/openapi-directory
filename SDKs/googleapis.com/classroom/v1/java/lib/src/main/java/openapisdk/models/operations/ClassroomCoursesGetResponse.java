package openapisdk.models.operations;



public class ClassroomCoursesGetResponse {
    public String contentType;
    public ClassroomCoursesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Course course;
    public ClassroomCoursesGetResponse withCourse(openapisdk.models.shared.Course course) {
        this.course = course;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}