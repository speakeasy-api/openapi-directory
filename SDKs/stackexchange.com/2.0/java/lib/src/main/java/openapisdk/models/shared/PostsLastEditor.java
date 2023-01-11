package openapisdk.models.shared;



public class PostsLastEditor {
    public Long acceptRate;
    public PostsLastEditor withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public PostsLastEditorBadgeCounts badgeCounts;
    public PostsLastEditor withBadgeCounts(PostsLastEditorBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public PostsLastEditor withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public PostsLastEditor withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public PostsLastEditor withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public PostsLastEditor withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public PostsLastEditor withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public PostsLastEditor withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}