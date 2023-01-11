package openapisdk.models.operations;



public class ClassroomCoursesUpdateResponse {
    public String contentType;
    public ClassroomCoursesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Course course;
    public ClassroomCoursesUpdateResponse withCourse(openapisdk.models.shared.Course course) {
        this.course = course;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}