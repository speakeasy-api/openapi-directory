package openapisdk.models.operations;



public class ClassroomCoursesStudentsGetResponse {
    public String contentType;
    public ClassroomCoursesStudentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesStudentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Student student;
    public ClassroomCoursesStudentsGetResponse withStudent(openapisdk.models.shared.Student student) {
        this.student = student;
        return this;
    }
}