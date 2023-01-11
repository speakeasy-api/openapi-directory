package openapisdk.models.shared;



public class QuestionsNotice {
    public String body;
    public QuestionsNotice withBody(String body) {
        this.body = body;
        return this;
    }
    public Long creationDate;
    public QuestionsNotice withCreationDate(Long creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Long ownerUserId;
    public QuestionsNotice withOwnerUserId(Long ownerUserId) {
        this.ownerUserId = ownerUserId;
        return this;
    }
}