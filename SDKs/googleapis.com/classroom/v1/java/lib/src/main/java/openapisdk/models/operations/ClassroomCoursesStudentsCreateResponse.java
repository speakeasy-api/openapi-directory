package openapisdk.models.operations;



public class ClassroomCoursesStudentsCreateResponse {
    public String contentType;
    public ClassroomCoursesStudentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesStudentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Student student;
    public ClassroomCoursesStudentsCreateResponse withStudent(openapisdk.models.shared.Student student) {
        this.student = student;
        return this;
    }
}