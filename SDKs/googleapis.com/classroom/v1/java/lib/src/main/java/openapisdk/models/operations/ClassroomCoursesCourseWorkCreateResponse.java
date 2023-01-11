package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkCreateResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseWork courseWork;
    public ClassroomCoursesCourseWorkCreateResponse withCourseWork(openapisdk.models.shared.CourseWork courseWork) {
        this.courseWork = courseWork;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}