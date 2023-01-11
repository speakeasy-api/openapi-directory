package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkStudentSubmissionsListResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkStudentSubmissionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStudentSubmissionsResponse listStudentSubmissionsResponse;
    public ClassroomCoursesCourseWorkStudentSubmissionsListResponse withListStudentSubmissionsResponse(openapisdk.models.shared.ListStudentSubmissionsResponse listStudentSubmissionsResponse) {
        this.listStudentSubmissionsResponse = listStudentSubmissionsResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkStudentSubmissionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}