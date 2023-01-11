package openapisdk.models.shared;



public class ReputationHistory {
    public Long creationDate;
    public ReputationHistory withCreationDate(Long creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Long postId;
    public ReputationHistory withPostId(Long postId) {
        this.postId = postId;
        return this;
    }
    public Long reputationChange;
    public ReputationHistory withReputationChange(Long reputationChange) {
        this.reputationChange = reputationChange;
        return this;
    }
    public String reputationHistoryType;
    public ReputationHistory withReputationHistoryType(String reputationHistoryType) {
        this.reputationHistoryType = reputationHistoryType;
        return this;
    }
    public Long userId;
    public ReputationHistory withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}