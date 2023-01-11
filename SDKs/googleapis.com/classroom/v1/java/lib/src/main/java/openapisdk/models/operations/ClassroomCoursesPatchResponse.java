package openapisdk.models.operations;



public class ClassroomCoursesPatchResponse {
    public String contentType;
    public ClassroomCoursesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Course course;
    public ClassroomCoursesPatchResponse withCourse(openapisdk.models.shared.Course course) {
        this.course = course;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}