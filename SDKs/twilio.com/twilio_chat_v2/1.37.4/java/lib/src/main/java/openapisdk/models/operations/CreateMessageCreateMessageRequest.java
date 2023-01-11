package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageCreateMessageRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateMessageCreateMessageRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public CreateMessageCreateMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public CreateMessageCreateMessageRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public CreateMessageCreateMessageRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public CreateMessageCreateMessageRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastUpdatedBy")
    public String lastUpdatedBy;
    public CreateMessageCreateMessageRequest withLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy;
        return this;
    }
    @SpeakeasyMetadata("form:name=MediaSid")
    public String mediaSid;
    public CreateMessageCreateMessageRequest withMediaSid(String mediaSid) {
        this.mediaSid = mediaSid;
        return this;
    }
}