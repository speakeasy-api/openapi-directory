package openapisdk.models.operations;



public class ClassroomCoursesAnnouncementsGetResponse {
    public openapisdk.models.shared.Announcement announcement;
    public ClassroomCoursesAnnouncementsGetResponse withAnnouncement(openapisdk.models.shared.Announcement announcement) {
        this.announcement = announcement;
        return this;
    }
    public String contentType;
    public ClassroomCoursesAnnouncementsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesAnnouncementsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}