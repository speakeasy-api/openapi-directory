package openapisdk.models.shared;



public class CommentsOwner {
    public Long acceptRate;
    public CommentsOwner withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public CommentsOwnerBadgeCounts badgeCounts;
    public CommentsOwner withBadgeCounts(CommentsOwnerBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public CommentsOwner withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public CommentsOwner withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public CommentsOwner withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public CommentsOwner withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public CommentsOwner withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public CommentsOwner withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}