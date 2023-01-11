package openapisdk.models.shared;



public class Revisions {
    public String body;
    public Revisions withBody(String body) {
        this.body = body;
        return this;
    }
    public String comment;
    public Revisions withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public Long creationDate;
    public Revisions withCreationDate(Long creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Boolean isRollback;
    public Revisions withIsRollback(Boolean isRollback) {
        this.isRollback = isRollback;
        return this;
    }
    public String lastBody;
    public Revisions withLastBody(String lastBody) {
        this.lastBody = lastBody;
        return this;
    }
    public Object[] lastTags;
    public Revisions withLastTags(Object[] lastTags) {
        this.lastTags = lastTags;
        return this;
    }
    public String lastTitle;
    public Revisions withLastTitle(String lastTitle) {
        this.lastTitle = lastTitle;
        return this;
    }
    public Long postId;
    public Revisions withPostId(Long postId) {
        this.postId = postId;
        return this;
    }
    public String postType;
    public Revisions withPostType(String postType) {
        this.postType = postType;
        return this;
    }
    public String revisionGuid;
    public Revisions withRevisionGuid(String revisionGuid) {
        this.revisionGuid = revisionGuid;
        return this;
    }
    public Long revisionNumber;
    public Revisions withRevisionNumber(Long revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
    public String revisionType;
    public Revisions withRevisionType(String revisionType) {
        this.revisionType = revisionType;
        return this;
    }
    public Boolean setCommunityWiki;
    public Revisions withSetCommunityWiki(Boolean setCommunityWiki) {
        this.setCommunityWiki = setCommunityWiki;
        return this;
    }
    public Object[] tags;
    public Revisions withTags(Object[] tags) {
        this.tags = tags;
        return this;
    }
    public String title;
    public Revisions withTitle(String title) {
        this.title = title;
        return this;
    }
    public RevisionsUser user;
    public Revisions withUser(RevisionsUser user) {
        this.user = user;
        return this;
    }
}