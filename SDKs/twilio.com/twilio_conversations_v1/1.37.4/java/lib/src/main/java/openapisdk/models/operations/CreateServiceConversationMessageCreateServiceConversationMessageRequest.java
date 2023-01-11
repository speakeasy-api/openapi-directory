package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationMessageCreateServiceConversationMessageRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateServiceConversationMessageCreateServiceConversationMessageRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Author")
    public String author;
    public CreateServiceConversationMessageCreateServiceConversationMessageRequest withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public CreateServiceConversationMessageCreateServiceConversationMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public CreateServiceConversationMessageCreateServiceConversationMessageRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public CreateServiceConversationMessageCreateServiceConversationMessageRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=MediaSid")
    public String mediaSid;
    public CreateServiceConversationMessageCreateServiceConversationMessageRequest withMediaSid(String mediaSid) {
        this.mediaSid = mediaSid;
        return this;
    }
}