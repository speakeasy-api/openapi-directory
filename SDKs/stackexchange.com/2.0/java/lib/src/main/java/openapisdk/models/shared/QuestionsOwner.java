package openapisdk.models.shared;



public class QuestionsOwner {
    public Long acceptRate;
    public QuestionsOwner withAcceptRate(Long acceptRate) {
        this.acceptRate = acceptRate;
        return this;
    }
    public QuestionsOwnerBadgeCounts badgeCounts;
    public QuestionsOwner withBadgeCounts(QuestionsOwnerBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public String displayName;
    public QuestionsOwner withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String link;
    public QuestionsOwner withLink(String link) {
        this.link = link;
        return this;
    }
    public String profileImage;
    public QuestionsOwner withProfileImage(String profileImage) {
        this.profileImage = profileImage;
        return this;
    }
    public Long reputation;
    public QuestionsOwner withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public Long userId;
    public QuestionsOwner withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public QuestionsOwner withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}