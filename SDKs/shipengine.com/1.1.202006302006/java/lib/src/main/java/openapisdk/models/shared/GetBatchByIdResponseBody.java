package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBatchByIdResponseBody
 * Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
 * thousands of labels at a time.
 * 
**/
public class GetBatchByIdResponseBody {
    @JsonProperty("batch_errors_url")
    public GetBatchByIdResponseBodyOptionalLink batchErrorsUrl;
    public GetBatchByIdResponseBody withBatchErrorsUrl(GetBatchByIdResponseBodyOptionalLink batchErrorsUrl) {
        this.batchErrorsUrl = batchErrorsUrl;
        return this;
    }
    @JsonProperty("batch_id")
    public java.util.Map<String, Object> batchId;
    public GetBatchByIdResponseBody withBatchId(java.util.Map<String, Object> batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonProperty("batch_labels_url")
    public OptionalLink batchLabelsUrl;
    public GetBatchByIdResponseBody withBatchLabelsUrl(OptionalLink batchLabelsUrl) {
        this.batchLabelsUrl = batchLabelsUrl;
        return this;
    }
    @JsonProperty("batch_notes")
    public String batchNotes;
    public GetBatchByIdResponseBody withBatchNotes(String batchNotes) {
        this.batchNotes = batchNotes;
        return this;
    }
    @JsonProperty("batch_shipments_url")
    public OptionalLink batchShipmentsUrl;
    public GetBatchByIdResponseBody withBatchShipmentsUrl(OptionalLink batchShipmentsUrl) {
        this.batchShipmentsUrl = batchShipmentsUrl;
        return this;
    }
    @JsonProperty("completed")
    public Integer completed;
    public GetBatchByIdResponseBody withCompleted(Integer completed) {
        this.completed = completed;
        return this;
    }
    @JsonProperty("count")
    public Integer count;
    public GetBatchByIdResponseBody withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public GetBatchByIdResponseBody withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("errors")
    public Integer errors;
    public GetBatchByIdResponseBody withErrors(Integer errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("external_batch_id")
    public String externalBatchId;
    public GetBatchByIdResponseBody withExternalBatchId(String externalBatchId) {
        this.externalBatchId = externalBatchId;
        return this;
    }
    @JsonProperty("form_download")
    public GetBatchByIdResponseBodyOptionalLink formDownload;
    public GetBatchByIdResponseBody withFormDownload(GetBatchByIdResponseBodyOptionalLink formDownload) {
        this.formDownload = formDownload;
        return this;
    }
    @JsonProperty("forms")
    public Integer forms;
    public GetBatchByIdResponseBody withForms(Integer forms) {
        this.forms = forms;
        return this;
    }
    @JsonProperty("label_download")
    public GetBatchByIdResponseBodyLabelDownload labelDownload;
    public GetBatchByIdResponseBody withLabelDownload(GetBatchByIdResponseBodyLabelDownload labelDownload) {
        this.labelDownload = labelDownload;
        return this;
    }
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public GetBatchByIdResponseBody withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public GetBatchByIdResponseBody withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonProperty("processed_at")
    public java.util.Map<String, Object> processedAt;
    public GetBatchByIdResponseBody withProcessedAt(java.util.Map<String, Object> processedAt) {
        this.processedAt = processedAt;
        return this;
    }
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public GetBatchByIdResponseBody withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    @JsonProperty("warnings")
    public Integer warnings;
    public GetBatchByIdResponseBody withWarnings(Integer warnings) {
        this.warnings = warnings;
        return this;
    }
}