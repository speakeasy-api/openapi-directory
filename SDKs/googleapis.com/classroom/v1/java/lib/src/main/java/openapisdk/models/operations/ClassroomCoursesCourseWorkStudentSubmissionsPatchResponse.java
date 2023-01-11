package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentSubmission studentSubmission;
    public ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse withStudentSubmission(openapisdk.models.shared.StudentSubmission studentSubmission) {
        this.studentSubmission = studentSubmission;
        return this;
    }
}