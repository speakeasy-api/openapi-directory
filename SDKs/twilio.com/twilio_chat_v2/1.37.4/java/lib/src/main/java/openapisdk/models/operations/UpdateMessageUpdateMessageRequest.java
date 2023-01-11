package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessageUpdateMessageRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateMessageUpdateMessageRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public UpdateMessageUpdateMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public UpdateMessageUpdateMessageRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public UpdateMessageUpdateMessageRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public UpdateMessageUpdateMessageRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastUpdatedBy")
    public String lastUpdatedBy;
    public UpdateMessageUpdateMessageRequest withLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy;
        return this;
    }
}