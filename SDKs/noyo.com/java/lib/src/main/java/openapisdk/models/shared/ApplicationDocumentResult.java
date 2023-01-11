package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicationDocumentResult {
    @JsonProperty("application_id")
    public String applicationId;
    public ApplicationDocumentResult withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public ApplicationDocumentResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("document_type")
    public String documentType;
    public ApplicationDocumentResult withDocumentType(String documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_upload_id")
    public String fileUploadId;
    public ApplicationDocumentResult withFileUploadId(String fileUploadId) {
        this.fileUploadId = fileUploadId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ApplicationDocumentResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public ApplicationDocumentResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ApplicationDocumentResult withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("notes")
    public String notes;
    public ApplicationDocumentResult withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("required")
    public Boolean required;
    public ApplicationDocumentResult withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonProperty("status")
    public ApplicationDocumentResultStatusEnum status;
    public ApplicationDocumentResult withStatus(ApplicationDocumentResultStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_notes")
    public String statusNotes;
    public ApplicationDocumentResult withStatusNotes(String statusNotes) {
        this.statusNotes = statusNotes;
        return this;
    }
    @JsonProperty("template_file_key")
    public String templateFileKey;
    public ApplicationDocumentResult withTemplateFileKey(String templateFileKey) {
        this.templateFileKey = templateFileKey;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public ApplicationDocumentResult withVersion(String version) {
        this.version = version;
        return this;
    }
}