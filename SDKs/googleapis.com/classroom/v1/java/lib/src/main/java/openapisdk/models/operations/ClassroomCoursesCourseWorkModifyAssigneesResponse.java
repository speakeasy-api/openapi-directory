package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkModifyAssigneesResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkModifyAssigneesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseWork courseWork;
    public ClassroomCoursesCourseWorkModifyAssigneesResponse withCourseWork(openapisdk.models.shared.CourseWork courseWork) {
        this.courseWork = courseWork;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkModifyAssigneesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}