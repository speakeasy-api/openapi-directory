package openapisdk.models.shared;



public class Notifications {
    public String body;
    public Notifications withBody(String body) {
        this.body = body;
        return this;
    }
    public Long creationDate;
    public Notifications withCreationDate(Long creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Boolean isUnread;
    public Notifications withIsUnread(Boolean isUnread) {
        this.isUnread = isUnread;
        return this;
    }
    public String notificationType;
    public Notifications withNotificationType(String notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    public Long postId;
    public Notifications withPostId(Long postId) {
        this.postId = postId;
        return this;
    }
    public NotificationsSite site;
    public Notifications withSite(NotificationsSite site) {
        this.site = site;
        return this;
    }
}