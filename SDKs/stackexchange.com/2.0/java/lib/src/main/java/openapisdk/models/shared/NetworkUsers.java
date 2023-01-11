package openapisdk.models.shared;



public class NetworkUsers {
    public Long accountId;
    public NetworkUsers withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    public Long answerCount;
    public NetworkUsers withAnswerCount(Long answerCount) {
        this.answerCount = answerCount;
        return this;
    }
    public NetworkUsersBadgeCounts badgeCounts;
    public NetworkUsers withBadgeCounts(NetworkUsersBadgeCounts badgeCounts) {
        this.badgeCounts = badgeCounts;
        return this;
    }
    public Long creationDate;
    public NetworkUsers withCreationDate(Long creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Long lastAccessDate;
    public NetworkUsers withLastAccessDate(Long lastAccessDate) {
        this.lastAccessDate = lastAccessDate;
        return this;
    }
    public Long questionCount;
    public NetworkUsers withQuestionCount(Long questionCount) {
        this.questionCount = questionCount;
        return this;
    }
    public Long reputation;
    public NetworkUsers withReputation(Long reputation) {
        this.reputation = reputation;
        return this;
    }
    public String siteName;
    public NetworkUsers withSiteName(String siteName) {
        this.siteName = siteName;
        return this;
    }
    public String siteUrl;
    public NetworkUsers withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
    public Object[] topAnswers;
    public NetworkUsers withTopAnswers(Object[] topAnswers) {
        this.topAnswers = topAnswers;
        return this;
    }
    public Object[] topQuestions;
    public NetworkUsers withTopQuestions(Object[] topQuestions) {
        this.topQuestions = topQuestions;
        return this;
    }
    public Long userId;
    public NetworkUsers withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    public String userType;
    public NetworkUsers withUserType(String userType) {
        this.userType = userType;
        return this;
    }
}