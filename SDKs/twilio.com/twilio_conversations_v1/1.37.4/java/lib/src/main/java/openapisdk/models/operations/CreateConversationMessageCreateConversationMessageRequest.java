package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationMessageCreateConversationMessageRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateConversationMessageCreateConversationMessageRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Author")
    public String author;
    public CreateConversationMessageCreateConversationMessageRequest withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public CreateConversationMessageCreateConversationMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public CreateConversationMessageCreateConversationMessageRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public CreateConversationMessageCreateConversationMessageRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=MediaSid")
    public String mediaSid;
    public CreateConversationMessageCreateConversationMessageRequest withMediaSid(String mediaSid) {
        this.mediaSid = mediaSid;
        return this;
    }
}