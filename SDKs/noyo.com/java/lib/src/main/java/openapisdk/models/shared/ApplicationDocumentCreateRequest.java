package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicationDocumentCreateRequest {
    @JsonProperty("document_type")
    public String documentType;
    public ApplicationDocumentCreateRequest withDocumentType(String documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ApplicationDocumentCreateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public ApplicationDocumentCreateRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}