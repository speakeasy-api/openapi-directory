package openapisdk.models.operations;



public class ClassroomCoursesAnnouncementsListResponse {
    public String contentType;
    public ClassroomCoursesAnnouncementsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAnnouncementsResponse listAnnouncementsResponse;
    public ClassroomCoursesAnnouncementsListResponse withListAnnouncementsResponse(openapisdk.models.shared.ListAnnouncementsResponse listAnnouncementsResponse) {
        this.listAnnouncementsResponse = listAnnouncementsResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesAnnouncementsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}