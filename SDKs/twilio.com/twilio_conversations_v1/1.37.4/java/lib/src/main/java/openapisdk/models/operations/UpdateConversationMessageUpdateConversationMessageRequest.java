package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationMessageUpdateConversationMessageRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateConversationMessageUpdateConversationMessageRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Author")
    public String author;
    public UpdateConversationMessageUpdateConversationMessageRequest withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public UpdateConversationMessageUpdateConversationMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public UpdateConversationMessageUpdateConversationMessageRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public UpdateConversationMessageUpdateConversationMessageRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
}