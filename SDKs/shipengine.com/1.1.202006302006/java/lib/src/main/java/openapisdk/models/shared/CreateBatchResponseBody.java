package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateBatchResponseBody
 * Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
 * thousands of labels at a time.
 * 
**/
public class CreateBatchResponseBody {
    @JsonProperty("batch_errors_url")
    public CreateBatchResponseBodyOptionalLink batchErrorsUrl;
    public CreateBatchResponseBody withBatchErrorsUrl(CreateBatchResponseBodyOptionalLink batchErrorsUrl) {
        this.batchErrorsUrl = batchErrorsUrl;
        return this;
    }
    @JsonProperty("batch_id")
    public java.util.Map<String, Object> batchId;
    public CreateBatchResponseBody withBatchId(java.util.Map<String, Object> batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonProperty("batch_labels_url")
    public OptionalLink batchLabelsUrl;
    public CreateBatchResponseBody withBatchLabelsUrl(OptionalLink batchLabelsUrl) {
        this.batchLabelsUrl = batchLabelsUrl;
        return this;
    }
    @JsonProperty("batch_notes")
    public String batchNotes;
    public CreateBatchResponseBody withBatchNotes(String batchNotes) {
        this.batchNotes = batchNotes;
        return this;
    }
    @JsonProperty("batch_shipments_url")
    public OptionalLink batchShipmentsUrl;
    public CreateBatchResponseBody withBatchShipmentsUrl(OptionalLink batchShipmentsUrl) {
        this.batchShipmentsUrl = batchShipmentsUrl;
        return this;
    }
    @JsonProperty("completed")
    public Integer completed;
    public CreateBatchResponseBody withCompleted(Integer completed) {
        this.completed = completed;
        return this;
    }
    @JsonProperty("count")
    public Integer count;
    public CreateBatchResponseBody withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public CreateBatchResponseBody withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("errors")
    public Integer errors;
    public CreateBatchResponseBody withErrors(Integer errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("external_batch_id")
    public String externalBatchId;
    public CreateBatchResponseBody withExternalBatchId(String externalBatchId) {
        this.externalBatchId = externalBatchId;
        return this;
    }
    @JsonProperty("form_download")
    public CreateBatchResponseBodyOptionalLink formDownload;
    public CreateBatchResponseBody withFormDownload(CreateBatchResponseBodyOptionalLink formDownload) {
        this.formDownload = formDownload;
        return this;
    }
    @JsonProperty("forms")
    public Integer forms;
    public CreateBatchResponseBody withForms(Integer forms) {
        this.forms = forms;
        return this;
    }
    @JsonProperty("label_download")
    public CreateBatchResponseBodyLabelDownload labelDownload;
    public CreateBatchResponseBody withLabelDownload(CreateBatchResponseBodyLabelDownload labelDownload) {
        this.labelDownload = labelDownload;
        return this;
    }
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public CreateBatchResponseBody withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public CreateBatchResponseBody withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonProperty("processed_at")
    public java.util.Map<String, Object> processedAt;
    public CreateBatchResponseBody withProcessedAt(java.util.Map<String, Object> processedAt) {
        this.processedAt = processedAt;
        return this;
    }
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public CreateBatchResponseBody withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    @JsonProperty("warnings")
    public Integer warnings;
    public CreateBatchResponseBody withWarnings(Integer warnings) {
        this.warnings = warnings;
        return this;
    }
}