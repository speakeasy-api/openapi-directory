package openapisdk.models.shared;



public class QuestionsMigratedFrom {
    public Long onDate;
    public QuestionsMigratedFrom withOnDate(Long onDate) {
        this.onDate = onDate;
        return this;
    }
    public QuestionsMigratedFromOtherSite otherSite;
    public QuestionsMigratedFrom withOtherSite(QuestionsMigratedFromOtherSite otherSite) {
        this.otherSite = otherSite;
        return this;
    }
    public Long questionId;
    public QuestionsMigratedFrom withQuestionId(Long questionId) {
        this.questionId = questionId;
        return this;
    }
}