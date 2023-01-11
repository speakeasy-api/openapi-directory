package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkPatchResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseWork courseWork;
    public ClassroomCoursesCourseWorkPatchResponse withCourseWork(openapisdk.models.shared.CourseWork courseWork) {
        this.courseWork = courseWork;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}