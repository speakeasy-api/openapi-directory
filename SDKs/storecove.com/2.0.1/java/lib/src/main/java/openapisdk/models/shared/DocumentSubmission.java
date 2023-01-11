package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentSubmission
 * The document you want Storecove to send, with some meta-data.
**/
public class DocumentSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public Attachment[] attachments;
    public DocumentSubmission withAttachments(Attachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createPrimaryImage")
    public Boolean createPrimaryImage;
    public DocumentSubmission withCreatePrimaryImage(Boolean createPrimaryImage) {
        this.createPrimaryImage = createPrimaryImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public SendableDocument document;
    public DocumentSubmission withDocument(SendableDocument document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotencyGuid")
    public String idempotencyGuid;
    public DocumentSubmission withIdempotencyGuid(String idempotencyGuid) {
        this.idempotencyGuid = idempotencyGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legalEntityId")
    public Long legalEntityId;
    public DocumentSubmission withLegalEntityId(Long legalEntityId) {
        this.legalEntityId = legalEntityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiveGuid")
    public String receiveGuid;
    public DocumentSubmission withReceiveGuid(String receiveGuid) {
        this.receiveGuid = receiveGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing")
    public Routing routing;
    public DocumentSubmission withRouting(Routing routing) {
        this.routing = routing;
        return this;
    }
}