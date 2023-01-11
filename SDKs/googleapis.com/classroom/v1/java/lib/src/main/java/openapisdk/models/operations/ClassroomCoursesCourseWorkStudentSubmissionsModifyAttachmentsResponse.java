package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudentSubmission studentSubmission;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse withStudentSubmission(openapisdk.models.shared.StudentSubmission studentSubmission) {
        this.studentSubmission = studentSubmission;
        return this;
    }
}