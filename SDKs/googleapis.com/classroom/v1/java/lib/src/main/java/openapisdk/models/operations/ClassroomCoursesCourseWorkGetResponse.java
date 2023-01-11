package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkGetResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseWork courseWork;
    public ClassroomCoursesCourseWorkGetResponse withCourseWork(openapisdk.models.shared.CourseWork courseWork) {
        this.courseWork = courseWork;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}