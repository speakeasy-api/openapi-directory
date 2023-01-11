package openapisdk.models.operations;



public class EnterpriseAdminSetAnnouncementResponse {
    public String contentType;
    public EnterpriseAdminSetAnnouncementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminSetAnnouncementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Announcement announcement;
    public EnterpriseAdminSetAnnouncementResponse withAnnouncement(openapisdk.models.shared.Announcement announcement) {
        this.announcement = announcement;
        return this;
    }
}