package openapisdk.models.shared;



public class TopTagObjects {
    public Long answerCount;
    public TopTagObjects withAnswerCount(Long answerCount) {
        this.answerCount = answerCount;
        return this;
    }
    public Long answerScore;
    public TopTagObjects withAnswerScore(Long answerScore) {
        this.answerScore = answerScore;
        return this;
    }
    public Long questionCount;
    public TopTagObjects withQuestionCount(Long questionCount) {
        this.questionCount = questionCount;
        return this;
    }
    public Long questionScore;
    public TopTagObjects withQuestionScore(Long questionScore) {
        this.questionScore = questionScore;
        return this;
    }
    public String tagName;
    public TopTagObjects withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
    public Long userId;
    public TopTagObjects withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}