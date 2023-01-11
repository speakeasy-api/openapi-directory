package openapisdk.models.operations;



public class ClassroomCoursesAnnouncementsModifyAssigneesResponse {
    public openapisdk.models.shared.Announcement announcement;
    public ClassroomCoursesAnnouncementsModifyAssigneesResponse withAnnouncement(openapisdk.models.shared.Announcement announcement) {
        this.announcement = announcement;
        return this;
    }
    public String contentType;
    public ClassroomCoursesAnnouncementsModifyAssigneesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesAnnouncementsModifyAssigneesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}