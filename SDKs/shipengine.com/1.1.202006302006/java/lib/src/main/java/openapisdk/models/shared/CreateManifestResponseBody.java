package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CreateManifestResponseBody
 * Deprecated manifest resource
**/
public class CreateManifestResponseBody {
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public CreateManifestResponseBody withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public CreateManifestResponseBody withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("form_id")
    public java.util.Map<String, Object> formId;
    public CreateManifestResponseBody withFormId(java.util.Map<String, Object> formId) {
        this.formId = formId;
        return this;
    }
    @JsonProperty("manifest_download")
    public CreateManifestResponseBodyManifestDownload manifestDownload;
    public CreateManifestResponseBody withManifestDownload(CreateManifestResponseBodyManifestDownload manifestDownload) {
        this.manifestDownload = manifestDownload;
        return this;
    }
    @JsonProperty("manifest_id")
    public java.util.Map<String, Object> manifestId;
    public CreateManifestResponseBody withManifestId(java.util.Map<String, Object> manifestId) {
        this.manifestId = manifestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifests")
    public Manifest[] manifests;
    public CreateManifestResponseBody withManifests(Manifest[] manifests) {
        this.manifests = manifests;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public CreateManifestResponseBody withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("shipments")
    public Integer shipments;
    public CreateManifestResponseBody withShipments(Integer shipments) {
        this.shipments = shipments;
        return this;
    }
    @JsonProperty("submission_id")
    public String submissionId;
    public CreateManifestResponseBody withSubmissionId(String submissionId) {
        this.submissionId = submissionId;
        return this;
    }
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public CreateManifestResponseBody withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}