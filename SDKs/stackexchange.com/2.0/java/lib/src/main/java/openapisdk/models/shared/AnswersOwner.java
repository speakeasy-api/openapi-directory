package openapisdk.models.shared;



public class AnswersOwner {
    public Long acceptRate;
    public AnswersOwner withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public AnswersOwnerBadgeCounts badgeCounts;
    public AnswersOwner withBadgeCounts(AnswersOwnerBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public AnswersOwner withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public AnswersOwner withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public AnswersOwner withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public AnswersOwner withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public AnswersOwner withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public AnswersOwner withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}