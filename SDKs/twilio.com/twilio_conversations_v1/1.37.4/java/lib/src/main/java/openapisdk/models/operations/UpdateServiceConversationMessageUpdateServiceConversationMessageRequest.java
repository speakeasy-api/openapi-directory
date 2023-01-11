package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConversationMessageUpdateServiceConversationMessageRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateServiceConversationMessageUpdateServiceConversationMessageRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Author")
    public String author;
    public UpdateServiceConversationMessageUpdateServiceConversationMessageRequest withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public UpdateServiceConversationMessageUpdateServiceConversationMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public UpdateServiceConversationMessageUpdateServiceConversationMessageRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public UpdateServiceConversationMessageUpdateServiceConversationMessageRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
}