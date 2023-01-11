package openapisdk.models.operations;



public class ClassroomCoursesTeachersCreateResponse {
    public String contentType;
    public ClassroomCoursesTeachersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesTeachersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Teacher teacher;
    public ClassroomCoursesTeachersCreateResponse withTeacher(openapisdk.models.shared.Teacher teacher) {
        this.teacher = teacher;
        return this;
    }
}