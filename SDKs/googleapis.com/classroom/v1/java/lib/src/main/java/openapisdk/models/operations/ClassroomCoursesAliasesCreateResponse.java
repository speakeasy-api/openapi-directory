package openapisdk.models.operations;



public class ClassroomCoursesAliasesCreateResponse {
    public String contentType;
    public ClassroomCoursesAliasesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CourseAlias courseAlias;
    public ClassroomCoursesAliasesCreateResponse withCourseAlias(openapisdk.models.shared.CourseAlias courseAlias) {
        this.courseAlias = courseAlias;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesAliasesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}