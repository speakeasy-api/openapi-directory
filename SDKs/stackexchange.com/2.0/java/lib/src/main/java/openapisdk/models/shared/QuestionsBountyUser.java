package openapisdk.models.shared;



public class QuestionsBountyUser {
    public Long acceptRate;
    public QuestionsBountyUser withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public QuestionsBountyUserBadgeCounts badgeCounts;
    public QuestionsBountyUser withBadgeCounts(QuestionsBountyUserBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public QuestionsBountyUser withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public QuestionsBountyUser withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public QuestionsBountyUser withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public QuestionsBountyUser withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public QuestionsBountyUser withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public QuestionsBountyUser withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}