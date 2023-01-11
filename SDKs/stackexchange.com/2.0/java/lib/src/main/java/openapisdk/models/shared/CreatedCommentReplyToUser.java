package openapisdk.models.shared;



public class CreatedCommentReplyToUser {
    public Long acceptRate;
    public CreatedCommentReplyToUser withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public CreatedCommentReplyToUserBadgeCounts badgeCounts;
    public CreatedCommentReplyToUser withBadgeCounts(CreatedCommentReplyToUserBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public CreatedCommentReplyToUser withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public CreatedCommentReplyToUser withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public CreatedCommentReplyToUser withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public CreatedCommentReplyToUser withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public CreatedCommentReplyToUser withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public CreatedCommentReplyToUser withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}