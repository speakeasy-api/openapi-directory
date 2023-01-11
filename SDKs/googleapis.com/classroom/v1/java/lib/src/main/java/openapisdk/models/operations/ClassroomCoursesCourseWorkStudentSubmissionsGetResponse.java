package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkStudentSubmissionsGetResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkStudentSubmissionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkStudentSubmissionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentSubmission studentSubmission;
    public ClassroomCoursesCourseWorkStudentSubmissionsGetResponse withStudentSubmission(openapisdk.models.shared.StudentSubmission studentSubmission) {
        this.studentSubmission = studentSubmission;
        return this;
    }
}