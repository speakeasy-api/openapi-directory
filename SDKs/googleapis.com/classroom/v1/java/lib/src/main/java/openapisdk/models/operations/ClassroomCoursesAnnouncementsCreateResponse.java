package openapisdk.models.operations;



public class ClassroomCoursesAnnouncementsCreateResponse {
    public openapisdk.models.shared.Announcement announcement;
    public ClassroomCoursesAnnouncementsCreateResponse withAnnouncement(openapisdk.models.shared.Announcement announcement) {
        this.announcement = announcement;
        return this;
    }
    public String contentType;
    public ClassroomCoursesAnnouncementsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesAnnouncementsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}