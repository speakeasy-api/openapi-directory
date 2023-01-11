package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachmentInput
 * Represents a file attached to a support case.
**/
public class AttachmentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public ActorInput creator;
    public AttachmentInput withCreator(ActorInput creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public AttachmentInput withFilename(String filename) {
        this.filename = filename;
        return this;
    }
}