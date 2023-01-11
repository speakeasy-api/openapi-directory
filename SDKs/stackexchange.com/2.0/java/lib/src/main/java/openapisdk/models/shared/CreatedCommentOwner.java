package openapisdk.models.shared;



public class CreatedCommentOwner {
    public Long acceptRate;
    public CreatedCommentOwner withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public CreatedCommentOwnerBadgeCounts badgeCounts;
    public CreatedCommentOwner withBadgeCounts(CreatedCommentOwnerBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public CreatedCommentOwner withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public CreatedCommentOwner withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public CreatedCommentOwner withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public CreatedCommentOwner withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public CreatedCommentOwner withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public CreatedCommentOwner withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}