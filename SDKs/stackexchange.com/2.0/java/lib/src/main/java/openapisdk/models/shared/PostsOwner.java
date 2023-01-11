package openapisdk.models.shared;



public class PostsOwner {
    public Long acceptRate;
    public PostsOwner withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public PostsOwnerBadgeCounts badgeCounts;
    public PostsOwner withBadgeCounts(PostsOwnerBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public PostsOwner withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public PostsOwner withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public PostsOwner withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public PostsOwner withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public PostsOwner withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public PostsOwner withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}