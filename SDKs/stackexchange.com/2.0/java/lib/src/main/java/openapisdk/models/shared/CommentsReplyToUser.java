package openapisdk.models.shared;



public class CommentsReplyToUser {
    public Long acceptRate;
    public CommentsReplyToUser withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public CommentsReplyToUserBadgeCounts badgeCounts;
    public CommentsReplyToUser withBadgeCounts(CommentsReplyToUserBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public CommentsReplyToUser withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public CommentsReplyToUser withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public CommentsReplyToUser withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public CommentsReplyToUser withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public CommentsReplyToUser withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public CommentsReplyToUser withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}