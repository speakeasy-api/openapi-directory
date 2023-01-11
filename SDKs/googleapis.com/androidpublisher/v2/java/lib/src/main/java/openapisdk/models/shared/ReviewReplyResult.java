package openapisdk.models.shared;



public class ReviewReplyResult {
    public Timestamp lastEdited;
    public ReviewReplyResult withLastEdited(Timestamp lastEdited) {
        this.lastEdited = lastEdited;
        return this;
    }
    public String replyText;
    public ReviewReplyResult withReplyText(String replyText) {
        this.replyText = replyText;
        return this;
    }
}