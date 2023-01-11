package openapisdk.models.shared;



public class QuestionTimelineEvents {
    public Long commentId;
    public QuestionTimelineEvents withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    public Long creationDate;
    public QuestionTimelineEvents withCreationDate(Long creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Long downVoteCount;
    public QuestionTimelineEvents withDownVoteCount(Long downVoteCount) {
        this.downVoteCount = downVoteCount;
        return this;
    }
    public QuestionTimelineEventsOwner owner;
    public QuestionTimelineEvents withOwner(QuestionTimelineEventsOwner owner) {
        this.owner = owner;
        return this;
    }
    public Long postId;
    public QuestionTimelineEvents withPostId(Long postId) {
        this.postId = postId;
        return this;
    }
    public Long questionId;
    public QuestionTimelineEvents withQuestionId(Long questionId) {
        this.questionId = questionId;
        return this;
    }
    public String revisionGuid;
    public QuestionTimelineEvents withRevisionGuid(String revisionGuid) {
        this.revisionGuid = revisionGuid;
        return this;
    }
    public String timelineType;
    public QuestionTimelineEvents withTimelineType(String timelineType) {
        this.timelineType = timelineType;
        return this;
    }
    public Long upVoteCount;
    public QuestionTimelineEvents withUpVoteCount(Long upVoteCount) {
        this.upVoteCount = upVoteCount;
        return this;
    }
    public QuestionTimelineEventsUser user;
    public QuestionTimelineEvents withUser(QuestionTimelineEventsUser user) {
        this.user = user;
        return this;
    }
}