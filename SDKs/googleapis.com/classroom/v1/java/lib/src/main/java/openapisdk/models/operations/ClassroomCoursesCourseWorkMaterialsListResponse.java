package openapisdk.models.operations;



public class ClassroomCoursesCourseWorkMaterialsListResponse {
    public String contentType;
    public ClassroomCoursesCourseWorkMaterialsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCourseWorkMaterialResponse listCourseWorkMaterialResponse;
    public ClassroomCoursesCourseWorkMaterialsListResponse withListCourseWorkMaterialResponse(openapisdk.models.shared.ListCourseWorkMaterialResponse listCourseWorkMaterialResponse) {
        this.listCourseWorkMaterialResponse = listCourseWorkMaterialResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesCourseWorkMaterialsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}