package openapisdk.models.operations;



public class ClassroomCoursesTeachersGetResponse {
    public String contentType;
    public ClassroomCoursesTeachersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesTeachersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Teacher teacher;
    public ClassroomCoursesTeachersGetResponse withTeacher(openapisdk.models.shared.Teacher teacher) {
        this.teacher = teacher;
        return this;
    }
}