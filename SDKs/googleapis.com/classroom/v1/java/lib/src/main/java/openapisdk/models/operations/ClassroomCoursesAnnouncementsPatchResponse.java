package openapisdk.models.operations;



public class ClassroomCoursesAnnouncementsPatchResponse {
    public openapisdk.models.shared.Announcement announcement;
    public ClassroomCoursesAnnouncementsPatchResponse withAnnouncement(openapisdk.models.shared.Announcement announcement) {
        this.announcement = announcement;
        return this;
    }
    public String contentType;
    public ClassroomCoursesAnnouncementsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomCoursesAnnouncementsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}